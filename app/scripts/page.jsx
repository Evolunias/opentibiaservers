'use client';

import { useState, useMemo, Suspense } from 'react';
import { Download, Copy, Check, X } from 'lucide-react';
import dynamicImport from 'next/dynamic';
import Link from 'next/link';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const LoadingPlaceholder = () => (
  <div style={{ padding: '12px', background: 'var(--bg-soft)', borderRadius: '6px', color: 'var(--text-muted)', fontSize: '12px' }}>Loading code...</div>
);

const SyntaxHighlighter = dynamicImport(() => import('react-syntax-highlighter'), {
  ssr: false,
  loading: LoadingPlaceholder,
});

const scripts = [
  {
    id: 'open-cursed-chests',
    name: 'Open Cursed Chests',
    description: 'Automatically opens cursed chests within a set distance range',
    category: 'Farming',
    language: 'lua',
    code: `setDefaultTab('EVO')
UI.Separator()

local macroActive = true
local maxDistance = 6  

onTextMessage(function(mode, text)
  if text == "You are not the owner of this chest." or text == "You are not the owner." then
    macroActive = false
    schedule(10000, function() macroActive = true end)  
  end
end)

macro(500, "Advanced Monster Chest", function()
  if not macroActive then return end  

  for i, tile in ipairs(g_map.getTiles(posz())) do
    for u, item in ipairs(tile:getItems()) do
      if item and item:getId() == 16183 then  
        local itemPos = tile:getPosition()
        local distance = getDistanceBetween(pos(), itemPos)
        
        if distance <= maxDistance then
          moveItemsOnBox(tile)  
          g_game.use(item)
          CaveBot.delay(3000)  
          return
        end
      end
    end
  end
end)

function moveItemsOnBox(tile)
  if tile:getThingCount() > 1 then 
    for _, thing in ipairs(tile:getThings()) do
      if thing:isItem() and not thing:isNotMoveable() then
        g_game.move(thing, pos(), thing:getCount())
        CaveBot.delay(1000) 
        return
      end
    end
  end
end

UI.Separator()`,
  },
  {
    id: 'complete-tasks-automatically',
    name: 'Complete Tasks Automatically',
    description: 'Automatically completes tasks by interacting with NPCs or using items',
    category: 'Tasks',
    language: 'lua',
    code: `setDefaultTab("Main")

storage.taskMonster = storage.taskMonster or "Rotworm"
if not storage.taskItemId or storage.taskItemId == "" then
  storage.taskItemId = "36337"
end
storage.taskUseNpc = storage.taskUseNpc or false
storage.taskerEnabled = storage.taskerEnabled or false
storage.taskNpcName = storage.taskNpcName or "Grizzly Adams"

local ui = setupUI([[
Panel
  height: 19

  BotSwitch
    id: title
    anchors.top: parent.top
    anchors.left: parent.left
    text-align: center
    width: 130
    !text: tr('Auto Tasker')

  Button
    id: setup
    anchors.top: prev.top
    anchors.left: prev.right
    anchors.right: parent.right
    margin-left: 3
    height: 17
    text: Setup
]], getTab("Main"))

ui.title:setOn(storage.taskerEnabled)

ui.title.onClick = function(widget)
  storage.taskerEnabled = not storage.taskerEnabled
  widget:setOn(storage.taskerEnabled)
  if autoTaskMacro then
    autoTaskMacro.setOn(storage.taskerEnabled)
  end
  
  if storage.taskerEnabled then
    storage.taskNeedRetake = true
    storage.taskSaidHi = false
  end
end

if storage.taskerEnabled then
  autoTaskMacro.setOn(true)
end`,
  },
  {
    id: 'pick-up-items-ground',
    name: 'Pick Up Items From The Ground',
    description: 'Automatically picks up specific items from the ground and organizes them',
    category: 'Farming',
    language: 'lua',
    code: `function getItemWeightFromTooltip(tooltip)
  local weight = string.match(tooltip, "It weighs (%d+%.?%d*) oz")
  return tonumber(weight)
end

local cursedContainer = nil
local openedBag = false
local cursedBagsMacro = macro(1000, "Cursed Bags", function(selfMacro)
 local updateBagWeight = false
 local foundBag = false
 for _, container in pairs(g_game.getContainers()) do
   if container:getName() == "demon backpack" then
     cursedContainer = container
   elseif container:getName() == "cursed chest bag" then
     foundBag = true
     if #container:getItems() == 0 then
       updateBagWeight = true
       g_game.close(container)
       goto continue
     end
     for _, item in ipairs(container:getItems()) do
       updateBagWeight = true
       g_game.move(item,cursedContainer:getSlotPosition(cursedContainer:getCapacity()), item:getCount())
     end
   end
   ::continue::
 end
 if cursedContainer ~= nil then
   for _, item in ipairs(cursedContainer:getItems()) do
     if item:getId() == 653 then
       local weight = getItemWeightFromTooltip(item:getTooltip())
       info(weight)
       if weight == 8 then
         info("dropping")
         g_game.move(item, player:getPosition())
         delay(2000)
         return
       end
     end
   end
 end
end)`,
  },
  {
    id: 'advanced-player-follow',
    name: 'Advanced Player Follow',
    description: 'Precision follow script that tracks a leader player with advanced pathfinding',
    category: 'Movement',
    language: 'lua',
    code: `local panelName = "PrecisionFollow"
setDefaultTab("Main") 

storage[panelName] = storage[panelName] or {}
storage[panelName].enabled = storage[panelName].enabled or true

storage[panelName].leaders = storage[panelName].leaders or {}
storage[panelName].leaders.mainLeader = storage[panelName].leaders.mainLeader or "Main leader"
storage[panelName].leaders.followName = storage[panelName].leaders.followName or "Follow name"

local leaderPositions = {}
local leaderDirections = {}
local leader
local lastLeaderFloor
local standTime = now
local followEnabled = true

local function getFollowName()
  return storage[panelName].leaders.followName:lower()
end

local function distance(pos1, pos2)
  local pos2 = pos2 or player:getPosition()
  return math.abs(pos1.x - pos2.x) + math.abs(pos1.y - pos2.y)
end

local function doFollow()
  if not storage[panelName].enabled or not followEnabled then return end
  
  if not leader then
    local leaderPos = leaderPositions[posz()]
    if leaderPos and getDistanceBetween(player:getPosition(), leaderPos) > 0 then
      autoWalk(leaderPos, 70, {ignoreNonPathable=true, precision=0})
      schedule(200, function() end)
      return
    end
  else
    local lpos = leader:getPosition()
    local parameters = {ignoreNonPathable=true, precision=1, ignoreCreatures=true}
    local distance = getDistanceBetween(player:getPosition(), lpos)
    if distance > 2 then
      autoWalk(lpos, 40, parameters)
      schedule(200, function() end)
    end
  end
end

leader = getCreatureByName(getFollowName())
if storage[panelName].enabled then
  followEnabled = true
end`,
  },
  {
    id: 'magic-level-training',
    name: 'Magic Level Training',
    description: 'Automatically trains magic level by casting spells within mana range',
    category: 'Training',
    language: 'lua',
    code: `UI.Label("Mana training")
if type(storage.manaTrain) ~= "table" then
  storage.manaTrain = {on=false, title="MP%", text="utevo lux", min=80, max=100}
end

local manatrainmacro = macro(1000, function()
  if TargetBot and TargetBot.isActive() then return end -- pause when attacking
  local mana = math.min(100, math.floor(100 * (player:getMana() / player:getMaxMana())))
  if storage.manaTrain.max >= mana and mana >= storage.manaTrain.min then
    say(storage.manaTrain.text)
  end
end)
manatrainmacro.setOn(storage.manaTrain.on)

UI.DualScrollPanel(storage.manaTrain, function(widget, newParams) 
  storage.manaTrain = newParams
  manatrainmacro.setOn(storage.manaTrain.on)
end)`,
  },
  {
    id: 'advanced-fishing',
    name: 'Advanced Fishing',
    description: 'Automatically fishes when near water, handles fatigue, and has randomized timing',
    category: 'Farming',
    language: 'lua',
    code: `waterIds = {4596, 4597, 4598, 4599, 4600, 4601, 4602, 4603}

local fishableId = 4598
local rodId = 36554 -- Fishing rod ID
local fishDistance = 7
local fishingActive = true

onTextMessage(function(mode, text)
    if text:find("Sorry, you is too tired") then
        fishingActive = false
        schedule(30000, function() fishingActive = true end)
    end
end)

macro(50, "Adv Auto Fish",  function()
    if fishingActive then
        for i, tile in ipairs(g_map.getTiles(posz())) do
            for j, item in ipairs(tile:getItems()) do
                if (item and item:getId() == fishableId) then
                    local distance = getDistanceBetween(pos(), tile:getPosition())
                    if (distance <= fishDistance) then
                        rand = math.random(1,10)
                        if(rand == 1) then
                            usewith(rodId,item)
                            return
                        end
                    end
                end
            end
        end
    end
end)

UI.Separator()`,
  },
  {
    id: 'party-healing',
    name: 'Party Healing',
    description: 'Automatically heals party members based on priority and health thresholds',
    category: 'Party',
    language: 'lua',
    code: `UI.Separator()
macro(100, "Sio - ED", function()
    local friend = getPlayerByName(storage.friendName)
    local friend1 = getPlayerByName(storage.friend1Name)
    local friend2 = getPlayerByName(storage.friend2Name)
  
    if friend and friend:getHealthPercent() < 95 then
        say("exura sio \\"" .. storage.friendName)
        delay(500)
    elseif friend1 and friend1:getHealthPercent() <= 85 then
        say("exura sio \\"" .. storage.friend1Name)
        delay(500)
    elseif friend2 and friend2:getHealthPercent() <= 80 then
        say("exura sio \\"" .. storage.friend2Name)
        delay(500)
    end
end)

addTextEdit("friendName", storage.friendName or "Friend Name", function(widget, text) 
    storage.friendName = text
end)
addLabel("Priority 1 ^ Priority 2 v", "Priority 1 ^ Priority 2 v")
addTextEdit("friend1Name", storage.friend1Name or "Friend Name", function(widget, text)
    storage.friend1Name = text
end) 
addLabel("Priority 2 ^ Priority 3 v", "Priority 2 ^ Priority 3 v")
addTextEdit("friend2Name", storage.friend2Name or "Friend Name", function(widget, text)
   storage.friend2Name = text
end)`,
  },
  {
    id: 'mining',
    name: 'Mining',
    description: 'Automatically mines ore veins, finds nearest mineable tiles, and uses pickaxe',
    category: 'Farming',
    language: 'lua',
    code: `local mineableIds = {391, 6707, 10691, 7807, 19808, 7805, 9894, 7808}
local pickIds = {3456} 
local useDistance = 1
local moveDistance = 10

-- Check if the tile has a mineable ore
local function isMineableTile(tile)
    local thing = tile:getTopUseThing()
    return thing and table.contains(mineableIds, thing:getId())
end

-- Get first usable pick in inventory
local function getUsablePick()
    for _, id in ipairs(pickIds) do
        local item = findItem(id)
        if item then
            return item
        end
    end
    return nil
end

-- Find the closest mineable tile we can walk to
local function getNearestMineableTile()
    local nearestTile = nil
    local shortestDistance = math.huge

    for _, tile in ipairs(g_map.getTiles(posz())) do
        if isMineableTile(tile) then
            local tilePos = tile:getPosition()
            local dist = getDistanceBetween(pos(), tilePos)

            if dist <= useDistance then
                local pick = getUsablePick()
                if pick then
                    usewith(pick, tile:getTopUseThing())
                end
                return nil
            elseif dist <= moveDistance then
                if findPath(pos(), tilePos, moveDistance, {ignoreNonPathable=true, precision=1}) then
                    if dist < shortestDistance then
                        nearestTile = tile
                        shortestDistance = dist
                    end
                end
            end
        end
    end

    return nearestTile
end

-- Main mining macro
macro(100, "Auto Mining", function()
    local targetTile = getNearestMineableTile()

    if targetTile then
        CaveBot.setOff()
        TargetBot.setOff()
        autoWalk(targetTile:getPosition(), moveDistance, {ignoreNonPathable=true, precision=1})
        delay(2000)
        CaveBot.setOn()
        TargetBot.setOn()
    end
end)`,
  },
  {
    id: 'eat-food',
    name: 'Eat Food',
    description: 'Automatically eats food items from containers when health regeneration is low',
    category: 'Utility',
    language: 'lua',
    code: `UI.Label("Eatable items:")
if type(storage.foodItems) ~= "table" then
  storage.foodItems = {3582, 3577}
end

local foodContainer = UI.Container(function(widget, items)
  storage.foodItems = items
end, true)
foodContainer:setHeight(35)
foodContainer:setItems(storage.foodItems)

macro(1000, "Eat Food", function()
  if isInPz() then return end
  if player:getRegenerationTime() > 400 or not storage.foodItems[1] then return end
  -- search for food in containers
  for _, container in pairs(g_game.getContainers()) do
    for __, item in ipairs(container:getItems()) do
      for i, foodItem in ipairs(storage.foodItems) do
        if item:getId() == foodItem.id then
          return g_game.use(item)
        end
      end
    end
  end
end)`,
  },
  {
    id: 'refill-stamina-40h',
    name: 'Refill Stamina Under 40 Hours',
    description: 'Automatically uses stamina potion when below 40 hours (2400 minutes)',
    category: 'Utility',
    language: 'lua',
    code: `macro(5000, "Use Stamina Under 40h", function()
    if stamina() <= 2399 then
        use(g_game.findItemInContainers(22120))
    end
end)`,
  },
  {
    id: 'refill-stamina-14h',
    name: 'Refill Stamina Under 14 Hours',
    description: 'Automatically uses stamina potion when below 14 hours (840 minutes)',
    category: 'Utility',
    language: 'lua',
    code: `macro(5000, "Use Stamina Under 14h", function()
    if stamina() <= 840 then
        use(g_game.findItemInContainers(22120))
    end
end)`,
  },
  {
    id: 'auto-open-doors',
    name: 'Auto Open Doors',
    description: 'Automatically opens doors as you move, enabling seamless navigation through locked passages',
    category: 'Movement',
    language: 'lua',
    code: `-- wiki.evolisca.com --

setDefaultTab("Tools")

local wsadWalking = modules.game_walking.wsadWalking
local doorsIds = { 1646, 1211, 1214, 1723, 1220, 1222, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1233, 1236, 1238, 1240, 1241, 1242, 1243, 1244, 1245, 1246, 1247, 1248, 1251, 1254, 1255, 1256, 1257, 1258, 1259, 1260, 1261, 1262, 1540, 1542, 1629, 1632, 1644, 1660, 1666, 1949,
    3537, 3539, 3540, 3541, 3542, 3543, 3546, 3548, 3549, 3550, 3551, 3552, 4915, 4918, 5083, 5085, 5100, 5102, 5103, 5104, 5105, 5106, 5109, 5111, 5112, 5113, 5114, 5115, 5118, 5120, 5121, 5122, 5123, 5124, 5127, 5129, 5130, 5131, 5132, 5133, 5136, 5139,
    5142, 5145, 5280, 5283, 5285, 5287, 5288, 5289, 5290, 5291, 5292, 5293, 5294, 5295, 5516, 5518, 5734, 5737, 5745, 5746, 5748, 5749, 6194, 6197, 6199, 6201, 6202, 6203, 6204, 6205, 6206, 6207, 6208, 6209, 6251, 6254, 6256, 6258, 6259, 6260, 6261, 6262,
    6263, 6264, 6265, 6266, 6796, 6798, 6800, 6802, 6893, 6895, 6896, 6897, 6898, 6899, 6902, 6904, 6905, 6906, 6907, 6908, 7035, 7037, 7038, 7039, 7040, 7041, 7044, 7046, 7047, 7048, 7049, 7050, 7055, 7057, 7727, 7728, 8265, 8266, 8543, 8546, 8548, 8550,
    8551, 8552, 8553, 8554, 8555, 8556, 8557, 8558, 8261, 9167, 9170, 9172, 9174, 9175, 9176, 9177, 9178, 9179, 9180, 9181, 9182, 9269, 9272, 9274, 9276, 9277, 9278, 9279, 9280, 9281, 9282, 9283, 9284, 10270, 10273, 10275, 10277, 10278, 10279, 10280, 10281, 10282,
    10283, 10284, 10285, 10470, 10472, 10473, 10474, 10475, 10476, 10479, 10481, 10482, 10483, 10484, 10485, 10777, 10780, 10781, 10782, 10783, 10786, 10789, 10790, 10791, 10792, 12094, 12095, 12096, 12097, 12098, 12101, 12102, 12103, 12104, 12105, 12190, 12193,
    12194, 12195, 12196, 12199, 12202, 12203, 12204, 12205, 13021, 13023, 17236, 17238, 18209, 19842, 19844, 19845, 19846, 19847, 19848, 19851, 19853, 19854, 19855, 19856, 19857, 19982, 19984, 19985, 19986, 19987, 19988, 19991, 19993, 19994, 19995, 19996, 19997,
    20275, 20277, 20278, 20279, 20280, 20281, 20284, 20286, 20287, 20288, 20289, 20290, 22816, 22818, 22820, 22821, 22822, 22825, 22827, 22829, 22830, 22831 }

local function contains(t, value)
    for _, v in ipairs(t) do
        if v == value then return true end
    end
    return false
end

local m = macro(1000, "Open All Doors", function() end, macroTab)

local function checkForDoors(pos)
    local tile = g_map.getTile(pos)
    if tile then
        local useThing = tile:getTopUseThing()
        if useThing and contains(doorsIds, useThing:getId()) then
            g_game.use(useThing)
        end
    end
end

onKeyPress(function(keys)
    if m.isOff() then return end
    local pos = player:getPosition()
    if keys == 'W' then
        pos.y = pos.y - 1
    elseif keys == 'S' then
        pos.y = pos.y + 1
    elseif keys == 'A' then
        pos.x = pos.x - 1
    elseif keys == 'D' then
        pos.x = pos.x + 1
    end
    checkForDoors(pos)
end)`,
  },
  {
    id: 'smart-immunity-stone',
    name: 'Smart Immunity Stone',
    description: 'Intelligently uses Seal of Quality when HP or MP drops below configurable threshold with cooldown tracking',
    category: 'Utility',
    language: 'lua',
    code: `-- wiki.evolisca.com --

setDefaultTab("EVO")

UI.Separator()
UI.Label("Main")
UI.Separator()
local itemId   = 34079
local delay    = 200
local cooldown = 180
local lastTick = 0

storage.lastUse         = storage.lastUse or 0
storage.ImmuneMode      = storage.ImmuneMode or "hp"
storage.ImmuneThreshold = storage.ImmuneThreshold or 50

local function getPct(mode)
    local p = g_game.getLocalPlayer()
    if not p then return 100 end
    if mode == "mp" then
        local mp    = p:getMana()
        local maxMp = p:getMaxMana()
        if maxMp <= 0 then return 100 end
        return (mp / maxMp) * 100
    else
        local hp    = p:getHealth()
        local maxHp = p:getMaxHealth()
        if maxHp <= 0 then return 100 end
        return (hp / maxHp) * 100
    end
end

countdownLabel = UI.Label("Cooldown: Ready!")
countdownLabel:setColor("#88CC44")

addSeparator()

addTextEdit("ImmuneThreshold", tostring(storage.ImmuneThreshold) .. "%", function(widget, text)
    local cleaned = (text:gsub("%%", ""))
    local val = tonumber(cleaned)
    if val and val > 0 and val <= 100 then
        storage.ImmuneThreshold = val
        widget:setText(val .. "%")
    end
end)

addTextEdit("ImmuneMode", storage.ImmuneMode:upper(), function(widget, text)
    local val = text:lower():gsub("%s", "")
    if val == "hp" or val == "mp" then
        storage.ImmuneMode = val
        widget:setText(val:upper())
    end
end)

macro(delay, "Enabled", function()
    local now = os.time()
    if now ~= lastTick then
        lastTick = now
        local remaining = cooldown - (now - storage.lastUse)
        if storage.lastUse == 0 or remaining <= 0 then
            countdownLabel:setText("Cooldown: Ready!")
            countdownLabel:setColor("#88CC44")
        else
            local mins = math.floor(remaining / 60)
            local secs = remaining % 60
            countdownLabel:setText(string.format("Cooldown: %dm %02ds", mins, secs))
            countdownLabel:setColor("#FF4444")
        end
    end

    local mode = storage.ImmuneMode
    local pct  = getPct(mode)
    if not pct then return end

if pct <= storage.ImmuneThreshold then
        if now - storage.lastUse >= cooldown then
            local item = findItem(itemId)
           if item then
    print("USING ITEM x3")
    use(item)
    use(item)
    use(item)
end
        end
    end
end)

onTextMessage(function(mode, text)
    if text:find("Using the last Seal of Quality") then
        storage.lastUse = os.time()
    end
    local m, s = text:match("again in (%d+) minute[s]? (%d+) second")
    if m then
        storage.lastUse = os.time() - cooldown + (tonumber(m) * 60 + tonumber(s))
        return
    end
    local s2 = text:match("again in (%d+) second")
    if s2 then
        storage.lastUse = os.time() - cooldown + tonumber(s2)
        return
    end
end)

UI.Separator()`,
  },
  {
    id: 'magic-wall-timers',
    name: 'Magic Wall Timers',
    description: 'Tracks Magic Wall and Wild Growth spell timers with automatic cooldown display',
    category: 'Utility',
    language: 'lua',
    code: `-- wiki.evolisca.com --

-- config
local magicWallId = 2129
local magicWallTime = 20000
local wildGrowthId = 2130
local wildGrowthTime = 45000

-- script
local activeTimers = {}

onAddThing(function(tile, thing)
  if not thing:isItem() then
    return
  end
  local timer = 0
  if thing:getId() == magicWallId then
    timer = magicWallTime
  elseif thing:getId() == wildGrowthId then
    timer = wildGrowthTime
  else
    return
  end

  local pos = tile:getPosition().x .. "," .. tile:getPosition().y .. "," .. tile:getPosition().z
  if not activeTimers[pos] or activeTimers[pos] < now then
    activeTimers[pos] = now + timer
  end
  tile:setTimer(activeTimers[pos] - now)
end)

onRemoveThing(function(tile, thing)
  if not thing:isItem() then
    return
  end
  if (thing:getId() == magicWallId or thing:getId() == wildGrowthId) and tile:getGround() then
    local pos = tile:getPosition().x .. "," .. tile:getPosition().y .. "," .. tile:getPosition().z
    activeTimers[pos] = nil
    tile:setTimer(0)
  end
end)`,
  },
  {
    id: 'infinity-exp',
    name: 'Infinity Exp Auto Use',
    description: 'Automatically uses Infinity Exp item (Yellow) every 60 seconds for continuous 10% XP bonus',
    category: 'Farming',
    language: 'lua',
    code: `-- wiki.evolisca.com --

setDefaultTab("EVO")
UI.Separator()
UI.Label("1 Minute Infinity Exp")
UI.Separator()
macro(60000, "Use Yellow Infinity Exp", function()
    use(40967)
end)
UI.Separator()`,
  },
  {
    id: 'soul-orbs',
    name: 'Soul Orbs / Soul Pearl',
    description: 'Automatically uses Soul Pearl every 30 minutes for extended farming sessions',
    category: 'Farming',
    language: 'lua',
    code: `-- wiki.evolisca.com / use for trainers --

setDefaultTab("EVO")
UI.Separator()
UI.Label("Soul Pearl 30 Min.")
UI.Separator()
macro(300000, "Use Soul Pearl 30 Minutes", function()
    use(14021)
end)`,
  },
  {
    id: 'stamina-doll',
    name: 'Stamina Doll Auto Use',
    description: 'Automatically uses stamina doll when stamina falls below 39:59 (2398 minutes)',
    category: 'Utility',
    language: 'lua',
    code: `-- wiki.evolisca.com --

setDefaultTab("Tools")

-- to use in 39:59 change 840 to 2398

macro(5000, "Use Stamina Under 39:59", function()
    if stamina() <= 2398 then
        use(g_game.findItemInContainers(22120))
    end
end)`,
  },
];

const categories = [...new Set(scripts.map(s => s.category))].sort();

function CodeModal({ script, onClose }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(script.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([script.code], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${script.id}.lua`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-header-content">
            <h2>{script.name}</h2>
            <p>{script.description}</p>
          </div>
          <button className="modal-close" onClick={onClose} title="Close">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="modal-code-wrapper">
          <div className="code-label">Complete Code</div>
          <div className="modal-code-container">
            <Suspense fallback={<LoadingPlaceholder />}>
              <SyntaxHighlighter
                language="lua"
                style={atomOneDark}
                customStyle={{
                  padding: '20px',
                  margin: 0,
                  borderRadius: '8px',
                  fontSize: '13px',
                  lineHeight: '1.7',
                  fontFamily: "'Monaco', 'Courier New', monospace",
                  background: 'rgba(18, 23, 22, 0.9)',
                }}
                wrapLongLines={true}
              >
                {script.code}
              </SyntaxHighlighter>
            </Suspense>
          </div>
        </div>

        <div className="modal-footer">
          <button
            onClick={handleCopy}
            className="modal-action-btn copy-btn"
            title="Copy to clipboard"
          >
            {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
            <span>{copied ? 'Copied!' : 'Copy Code'}</span>
          </button>
          <button
            onClick={handleDownload}
            className="modal-action-btn download-btn"
            title="Download as .lua file"
          >
            <Download className="h-5 w-5" />
            <span>Download .lua</span>
          </button>
        </div>
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
          backdrop-filter: blur(4px);
        }

        .modal-content {
          background: var(--bg-elevated);
          border: 1px solid var(--line-strong);
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          max-width: 1000px;
          width: 100%;
          max-height: 90vh;
          box-shadow: 0 25px 75px rgba(0, 0, 0, 0.6);
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 20px;
          padding: 28px;
          border-bottom: 1px solid var(--line);
          background: rgba(251, 191, 36, 0.08);
        }

        .modal-header-content {
          flex: 1;
        }

        .modal-header h2 {
          margin: 0 0 8px 0;
          font-size: 26px;
          font-weight: 700;
          color: var(--text);
        }

        .modal-header p {
          margin: 0;
          color: var(--text-muted);
          font-size: 14px;
          line-height: 1.5;
        }

        .modal-close {
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: color 0.2s ease;
          flex-shrink: 0;
          border-radius: 6px;
        }

        .modal-close:hover {
          background: rgba(251, 191, 36, 0.1);
          color: var(--gold);
        }

        .modal-code-wrapper {
          flex: 1;
          overflow: hidden;
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          background: rgba(0, 0, 0, 0.3);
        }

        .code-label {
          font-size: 12px;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .modal-code-container {
          flex: 1;
          overflow: auto;
          border: 1px solid var(--line-strong);
          border-radius: 8px;
          background: rgba(18, 23, 22, 0.9);
        }

        .modal-code-container :global(pre) {
          margin: 0 !important;
        }

        .modal-code-container :global(code) {
          font-size: 13px !important;
        }

        .modal-footer {
          display: flex;
          gap: 12px;
          padding: 20px 28px;
          border-top: 1px solid var(--line);
          background: rgba(18, 23, 22, 0.5);
        }

        .modal-action-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 12px 20px;
          border: 1px solid var(--line-strong);
          border-radius: 8px;
          background: transparent;
          color: var(--text);
          cursor: pointer;
          font-size: 14px;
          font-weight: 600;
          transition: all 0.2s ease;
          flex: 1;
        }

        .modal-action-btn:hover {
          background: rgba(251, 191, 36, 0.08);
          border-color: var(--gold);
          color: var(--gold);
        }

        @media (max-width: 768px) {
          .modal-overlay {
            padding: 12px;
          }

          .modal-content {
            max-height: 95vh;
          }

          .modal-header {
            flex-direction: column;
            gap: 12px;
            padding: 20px;
          }

          .modal-header h2 {
            font-size: 22px;
          }

          .modal-code-wrapper {
            padding: 16px;
          }

          .modal-footer {
            flex-direction: column;
            padding: 16px;
            gap: 8px;
          }

          .modal-action-btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

function ScriptCard({ script, onViewCode }) {
  return (
    <article className="script-card">
      <div className="card-header">
        <div className="header-top">
          <h3>{script.name}</h3>
          <span className="category-badge">{script.category}</span>
        </div>
        <p className="card-description">{script.description}</p>
      </div>

      <div className="code-display-section">
        <div className="code-section-label">Code Preview</div>
        <div className="code-display-box">
          <Suspense fallback={<LoadingPlaceholder />}>
            <SyntaxHighlighter
              language="lua"
              style={atomOneDark}
              customStyle={{
                padding: '12px',
                margin: 0,
                borderRadius: '6px',
                fontSize: '11px',
                lineHeight: '1.5',
                fontFamily: "'Monaco', 'Courier New', monospace",
                background: 'rgba(18, 23, 22, 0.95)',
              }}
              wrapLongLines={true}
              showLineNumbers={false}
            >
              {script.code.split('\n').slice(0, 15).join('\n')}
              {script.code.split('\n').length > 15 ? '\n-- ... (more code)' : ''}
            </SyntaxHighlighter>
          </Suspense>
        </div>
      </div>

      <button onClick={() => onViewCode(script)} className="view-code-btn">
        View Full Code
      </button>
    </article>
  );
}

export default function ScriptsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedScript, setSelectedScript] = useState(null);

  const filteredScripts = useMemo(() => {
    return scripts.filter(script => {
      const matchesSearch = 
        script.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        script.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !selectedCategory || script.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const groupedScripts = useMemo(() => {
    const groups = {};
    filteredScripts.forEach(script => {
      if (!groups[script.category]) {
        groups[script.category] = [];
      }
      groups[script.category].push(script);
    });
    return groups;
  }, [filteredScripts]);

  return (
    <main className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />


      <section className="inner-shell">
        <div className="page-header">
          <div>
            <h1>Scripts Library</h1>
            <p>Copy-paste ready scripts for farming, training, party play, and more</p>
          </div>
        </div>

        <div className="controls-section">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search scripts by name or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="filter-section">
            <span className="filter-label">Filter by Category:</span>
            <div className="category-filters">
              <button
                className={`filter-btn ${!selectedCategory ? 'active' : ''}`}
                onClick={() => setSelectedCategory('')}
              >
                All ({scripts.length})
              </button>
              {categories.map(category => {
                const count = scripts.filter(s => s.category === category).length;
                return (
                  <button
                    key={category}
                    className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category} ({count})
                  </button>
                );
              })}
            </div>
          </div>

          {filteredScripts.length > 0 && (
            <div className="results-info">
              Showing {filteredScripts.length} of {scripts.length} scripts
            </div>
          )}
        </div>

        <div className="scripts-container">
          {Object.keys(groupedScripts).length > 0 ? (
            Object.keys(groupedScripts)
              .sort()
              .map(category => (
                <div key={category} className="category-section">
                  <h2 className="category-title">{category}</h2>
                  <div className="scripts-grid">
                    {groupedScripts[category].map(script => (
                      <ScriptCard
                        key={script.id}
                        script={script}
                        onViewCode={setSelectedScript}
                      />
                    ))}
                  </div>
                </div>
              ))
          ) : (
            <div className="no-results">
              <p>No scripts found matching your search.</p>
              <button
                className="reset-btn"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('');
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

        <div className="special-credits-section">
          <h2 className="credits-title">✨ Special Credits</h2>
          <p className="credits-description">These amazing players contributed to the scripts library and helped build this community knowledge base</p>
          <div className="credits-grid">
            <div className="credit-item credit-item-featured">
              <img loading="lazy" src="/images/downloaded/builder-7edaf092-bce6e33b.webp" alt="Kratos Discord Profile" className="credit-profile-image" />
              <div className="credit-name">Kratos</div>
              <div className="credit-username">original.devil</div>
            </div>
            <div className="credit-item">
              <img loading="lazy" src="/images/downloaded/builder-34372cd4-80af9609.webp" alt="-CBlade- Discord Profile" className="credit-profile-image" />
              <div className="credit-name">-CBlade-</div>
              <div className="credit-username">cblade00</div>
            </div>
            <div className="credit-item">
              <img loading="lazy" src="/images/downloaded/builder-e2966bea-0e4fe632.webp" alt="Naeksu Discord Profile" className="credit-profile-image" />
              <div className="credit-name">Naeksu👑</div>
              <div className="credit-username">nrklejgnfdsgdfg</div>
            </div>
            <div className="credit-item">
              <img loading="lazy" src="/images/downloaded/builder-249ae3cf-bbc94eb2.webp" alt="Immortal Discord Profile" className="credit-profile-image" />
              <div className="credit-name">Immortal</div>
              <div className="credit-username">immortal243535</div>
            </div>
          </div>
        </div>

      </section>

      {selectedScript && (
        <CodeModal script={selectedScript} onClose={() => setSelectedScript(null)} />
      )}

      <style jsx>{`
        .page-header {
          margin-bottom: 40px;
          text-align: center;
        }

        .page-header h1 {
          margin: 0 0 8px 0;
          font-size: 42px;
          font-weight: 700;
          color: var(--text);
        }

        .page-header p {
          margin: 0;
          color: var(--text-muted);
          font-size: 18px;
          line-height: 1.6;
        }

        .controls-section {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-bottom: 48px;
          padding: 28px;
          background: var(--bg-soft);
          border: 1px solid var(--line);
          border-radius: 12px;
          align-items: center;
        }

        .search-container {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .search-input {
          width: 100%;
          max-width: 600px;
          padding: 14px 16px;
          border: 1px solid var(--line-strong);
          border-radius: 8px;
          background: var(--bg-elevated);
          color: var(--text);
          font-size: 15px;
          transition: all 0.2s ease;
        }

        .search-input:focus {
          outline: none;
          border-color: var(--gold);
          box-shadow: 0 0 0 3px rgba(251, 191, 36, 0.1);
        }

        .search-input::placeholder {
          color: var(--text-muted);
        }

        .filter-section {
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: center;
          width: 100%;
        }

        .filter-label {
          font-size: 12px;
          font-weight: 700;
          color: var(--text);
          text-transform: uppercase;
          letter-spacing: 0.8px;
        }

        .category-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
        }

        .filter-btn {
          padding: 9px 16px;
          border: 1px solid var(--line-strong);
          border-radius: 6px;
          background: transparent;
          color: var(--text-muted);
          cursor: pointer;
          font-size: 13px;
          font-weight: 600;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .filter-btn:hover {
          border-color: var(--gold);
          color: var(--gold);
          background: rgba(251, 191, 36, 0.04);
        }

        .filter-btn.active {
          background: rgba(251, 191, 36, 0.12);
          border-color: var(--gold);
          color: var(--gold);
        }

        .results-info {
          font-size: 13px;
          color: var(--text-muted);
          padding: 4px 0;
          text-align: center;
        }

        .scripts-container {
          display: flex;
          flex-direction: column;
          gap: 56px;
          align-items: center;
          width: 100%;
        }

        .category-section {
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 100%;
          align-items: center;
        }

        .category-title {
          margin: 0;
          font-size: 26px;
          font-weight: 700;
          color: var(--text);
          padding-bottom: 16px;
          border-bottom: 2px solid var(--line-strong);
          text-align: center;
          width: 100%;
          max-width: 1400px;
        }

        .scripts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
          gap: 24px;
          width: 100%;
          max-width: 1400px;
          justify-items: center;
        }

        .script-card {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 28px;
          background: var(--bg-soft);
          border: 1px solid var(--line-strong);
          border-radius: 12px;
          transition: all 0.3s ease;
          width: 100%;
          max-width: 360px;
        }

        .script-card:hover {
          border-color: var(--gold);
          background: rgba(251, 191, 36, 0.12);
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(251, 191, 36, 0.08);
        }

        .card-header {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .header-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 12px;
        }

        .script-card h3 {
          margin: 0;
          font-size: 19px;
          font-weight: 700;
          color: var(--text);
        }

        .category-badge {
          padding: 5px 12px;
          background: rgba(251, 191, 36, 0.12);
          color: var(--gold);
          border-radius: 5px;
          font-size: 10px;
          font-weight: 700;
          white-space: nowrap;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          border: 1px solid rgba(251, 191, 36, 0.3);
        }

        .card-description {
          margin: 0;
          color: var(--text-muted);
          font-size: 14px;
          line-height: 1.6;
        }

        .code-display-section {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 10px;
          overflow: hidden;
        }

        .code-section-label {
          font-size: 11px;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.7px;
        }

        .code-display-box {
          flex: 1;
          overflow: hidden;
          border: 1px solid var(--line-strong);
          border-radius: 8px;
          background: rgba(18, 23, 22, 0.95);
          max-height: 200px;
        }

        .code-display-box :global(pre) {
          margin: 0 !important;
          height: 100% !important;
        }

        .code-display-box :global(code) {
          font-size: 11px !important;
        }

        .view-code-btn {
          padding: 11px 18px;
          background: transparent;
          border: 1.5px solid var(--gold);
          border-radius: 7px;
          color: var(--gold);
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .view-code-btn:hover {
          background: rgba(251, 191, 36, 0.1);
          transform: translateY(-1px);
        }

        .no-results {
          text-align: center;
          padding: 80px 20px;
        }

        .no-results p {
          margin: 0 0 24px 0;
          font-size: 18px;
          color: var(--text-muted);
        }

        .reset-btn {
          display: inline-block;
          padding: 12px 28px;
          border: 1.5px solid var(--line-strong);
          border-radius: 7px;
          background: transparent;
          color: var(--text);
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .reset-btn:hover {
          border-color: var(--gold);
          color: var(--gold);
          background: rgba(251, 191, 36, 0.08);
        }

        @media (max-width: 1024px) {
          .scripts-grid {
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          }
        }

        .special-credits-section {
          margin-top: 72px;
          padding: 48px 0;
          border-top: 2px solid var(--line-strong);
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }

        .credits-title {
          margin: 0 0 12px 0;
          font-size: 28px;
          font-weight: 700;
          color: var(--text);
          text-align: center;
        }

        .credits-description {
          margin: 0 0 32px 0;
          color: var(--text-muted);
          font-size: 15px;
          line-height: 1.6;
          text-align: center;
          max-width: 600px;
        }

        .credits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 20px;
          width: 100%;
          max-width: 1000px;
          justify-items: center;
        }

        .credit-item {
          padding: 20px;
          background: var(--bg-soft);
          border: 1px solid var(--line-strong);
          border-radius: 10px;
          text-align: center;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 8px;
        }

        .credit-item:hover {
          border-color: var(--gold);
          background: var(--bg-elevated);
          box-shadow: 0 8px 24px rgba(251, 191, 36, 0.1);
          transform: translateY(-2px);
        }

        .credit-name {
          font-size: 16px;
          font-weight: 700;
          color: var(--gold);
        }

        .credit-username {
          font-size: 12px;
          color: var(--text-muted);
          font-style: italic;
        }

        .credit-item-featured {
          grid-column: span 1;
          border: 2px solid var(--gold);
          background: linear-gradient(135deg, var(--bg-soft) 0%, var(--bg-elevated) 100%);
        }

        .credit-item-featured:hover {
          box-shadow: 0 12px 32px rgba(251, 191, 36, 0.15);
          border-color: rgba(251, 191, 36, 0.8);
        }

        .credit-profile-image {
          width: 120px;
          height: 120px;
          border-radius: 8px;
          object-fit: cover;
          border: 2px solid var(--gold);
          margin-bottom: 8px;
        }

        @media (max-width: 768px) {
          .page-header h1 {
            font-size: 32px;
          }

          .controls-section {
            gap: 18px;
            padding: 20px;
          }

          .category-filters {
            flex-direction: column;
          }

          .filter-btn {
            flex: 1;
          }

          .scripts-grid {
            grid-template-columns: 1fr;
          }

          .code-display-box {
            max-height: 180px;
          }

          .category-title {
            font-size: 22px;
          }

          .script-card {
            padding: 20px;
            gap: 16px;
          }

          .credits-grid {
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
            gap: 16px;
          }

          .credit-item {
            padding: 16px;
          }

          .credit-name {
            font-size: 15px;
          }

          .credit-username {
            font-size: 11px;
          }
        }

      `}</style>
    </main>
  );
}
