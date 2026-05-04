'use client';

export const dynamic = 'force-dynamic';

import Link from 'next/link';

export default function NPCQuestsPage() {
  const npcQuests = [
    {
      npc: 'Semna',
      spawn: 'Rotworm Spawn',
      difficulty: 'Beginner',
      missions: [
        { name: 'Kill 50 Carrion Worms', description: 'Kill 50 Carrion Worms.' },
        { name: 'Kill 80 Skeletons', description: 'Kill 80 Skeletons.' },
        { name: 'Kill 120 Cyclops', description: 'Kill 120 Cyclops.' }
      ]
    },
    {
      npc: 'Orion',
      spawn: 'Demon Skeleton Spawn',
      difficulty: 'Beginner',
      missions: [
        { name: 'Collect Tear of Daraman', description: 'Bring me 1x Tear of Daraman (dropped by Demon Skeleton)' },
        { name: 'Kill 300 Bogs', description: 'Kill 300 of Bog Raiders.' },
        { name: 'Collect 50 green dragon scales', description: 'Bring me 50 green dragon scales (dropped by Dragon).' }
      ]
    },
    {
      npc: 'Graeme',
      spawn: 'Dragons Spawn',
      difficulty: 'Beginner',
      missions: [
        { name: 'Collect Red Dragon Claw', description: 'I want to acquire a Red Dragon Claw. Can you assist me in finding one? (dropped by Demodras)' }
      ]
    },
    {
      npc: 'Sabry',
      spawn: 'Bog Raider Spawn',
      difficulty: 'Intermediate',
      missions: [
        { name: 'Collect 100 green pieces of cloth', description: 'Collect 100x green pieces of cloth (dropped by Bog Raider).' },
        { name: 'Kill 600 Wailing Widows', description: 'Kill 600 of Wailing Widows.' },
        { name: 'Retrieve Sniper Glove', description: 'Retrieve 1x Sniper Gloves (dropped by The Old Widow).' }
      ]
    },
    {
      npc: 'Sevon',
      spawn: 'Tortoise Spawn',
      difficulty: 'Intermediate',
      missions: [
        { name: 'Collect 200 Shell Hunt', description: 'Acquire 200 turtle shells (dropped by tortoise).' }
      ]
    },
    {
      npc: 'Lady Menna',
      spawn: 'Orc Spawn',
      difficulty: 'Intermediate',
      missions: [
        { name: 'Protectors Challenge', description: 'Please be cautious. This statue is guarded by five protectors, and you will need to defeat them in order to complete the ritual and free my sister\'s soul.' }
      ]
    },
    {
      npc: 'Captain Jack',
      spawn: 'Promotion Quest, Evolisca Main City',
      difficulty: 'Advanced',
      missions: [
        { name: 'Retrieve Citizen Doll', description: 'Dragon Lord stole my Citizen Doll, and I want your help to get it back for me (Dragon Lord Spawn).' },
        { name: 'Touch Hero Statue', description: 'My mission for you now is to check your strength, as the next mission will be challenging. In the Necromancer statue, known as the Hero Statue, you can touch it and come back to me (Necromancer Spawn).' },
        { name: 'Retrieve The Promotion Emblem', description: 'NPC will take you to QUEST and it is better to have 5 people with EK to do it easy.' }
      ]
    },
    {
      npc: 'Magnus',
      spawn: 'Dragon Lord Spawn',
      difficulty: 'Advanced',
      missions: [
        { name: 'Collect Materials', description: 'Acquire 50 red dragon scales and 50 red dragon leather. All items (dropped by Dragon Lord)' }
      ]
    },
    {
      npc: 'Little Angel',
      spawn: 'Hydra Spawn',
      difficulty: 'Advanced',
      missions: [
        { name: 'Collect Materials', description: 'You need to bring me 10 red pieces of cloth (dropped by Elite Akrabuut), 10 hydra eggs (dropped by The Many), 10 soul orbs (dropped by Furyosa)' },
        { name: 'Kill 500 Warlocks', description: 'You need to eliminate 500 Warlocks, but you must be cautious as they are known for their cunning' },
        { name: 'Find The wand', description: 'You need to find the Little Angel Wand, which can be acquired with Diamonds. It was stolen from me (Diamond Servant -3)' }
      ]
    },
    {
      npc: 'Viktor',
      spawn: 'Frost Dragon Spawn',
      difficulty: 'Advanced',
      missions: [
        { name: 'Collect 100 Shard', description: 'Acquire 100x shards.' }
      ]
    },
    {
      npc: 'Chondur',
      spawn: 'Stampor Spawn',
      difficulty: 'Advanced',
      missions: [
        { name: 'Stampor Collectibles', description: 'Acquire 25 stampor horns, 25 stampor talons and 25 hollow stampor hoofs.' }
      ]
    },
    {
      npc: 'Salem',
      spawn: 'Warlock Spawn',
      difficulty: 'Advanced',
      missions: [
        { name: 'Collect Materials', description: 'Collect 100x blue pieces of cloth and 100x white pieces of cloth (dropped by warlock).' },
        { name: 'Retrieve Morgaroth Heart', description: 'Retrieve 1x Morgaroth heart (dropped by Morgaroth)' },
        { name: 'Retrieve wild desert rose', description: 'Retrieve 1x wild desert rose (dropped by Furyosa).' }
      ]
    },
    {
      npc: 'Mythical Elf',
      spawn: 'Banshee Spawn',
      difficulty: 'Advanced',
      missions: [
        { name: 'Collect 100 seacrest scales', description: 'Please bring to me 100x seacrest scales (dropped by Serpent Spawn).' },
        { name: 'Kill 750 Banshee', description: 'You need to eliminate 750 Banshee.' },
        { name: 'Collect Materials', description: 'I\'d like your assistance in collecting 100x hellspawn tail (dropped by hellspawn), 100x slime molds (dropped by Servants), 100x necromantic robe (dropped by Necromancer).' }
      ]
    },
    {
      npc: 'The King',
      spawn: 'Dark Magician Spawn - Mirage Island',
      difficulty: 'Elite',
      missions: [
        { name: 'Collect Materials', description: 'Acquire 75 ankhs (dropped by Dark Apprentice, Dark Magician, and Dark Monk) and 10x nettle blossoms (dropped by Plagueroot).' }
      ]
    },
    {
      npc: 'Hakem',
      spawn: 'Black Knight Spawn - Mirage Island',
      difficulty: 'Elite',
      missions: [
        { name: 'Collect thorn seed', description: 'Bring me 1x thorn seed (dropped by Black Knight), and once you return.' },
        { name: 'Kill 700 Infernalist', description: 'Kill 700 of Infernalist, be careful on yourself' },
        { name: 'Retrieve magical music notes', description: 'Please retrieve my magical music notes; they were stolen by elves. I live alone here, and recovering these items is important to me' }
      ]
    },
    {
      npc: 'Yehia',
      spawn: 'Infernalist Spawn - Mirage Island',
      difficulty: 'Elite',
      missions: [
        { name: 'Kill 5 Death Mage', description: 'Kill 5 Death Mage and come back to me.' }
      ]
    },
    {
      npc: 'Shams',
      spawn: 'Swamp Snapper Spawn - Mirage Island',
      difficulty: 'Elite',
      missions: [
        { name: 'Collect Materials', description: 'Collect 100x swamp grass and 100x swampling mosses.' }
      ]
    },
    {
      npc: 'Fena',
      spawn: 'Shaper Matriarch Spawn - Mirage Island',
      difficulty: 'Elite',
      missions: [
        { name: 'Collect 100x brown pieces of cloth', description: 'Collect 100x brown pieces of cloth (dropped by Shaper Matriarch).' },
        { name: 'Collect 100x beetle carapaces', description: 'Collect 100x beetle carapaces (dropped by Orclops Ravager).' },
        { name: 'Collect 200x withered scalps', description: 'Collect 200x withered scalps (dropped by Jungle Beasts).' }
      ]
    },
    {
      npc: 'Esam',
      spawn: 'Royal Man Spawn - Mirage Island',
      difficulty: 'Elite',
      missions: [
        { name: 'Kill 3000 Royal Man Mob', description: 'Kill 3000 of Royal Man Mobs.' }
      ]
    },
    {
      npc: 'Destma',
      spawn: 'Elfs Spawn - Mirage Island',
      difficulty: 'Elite',
      missions: [
        { name: 'Collect Materials', description: 'Bring me 1x old silver key (dropped by elves) to gain access to Pirate Island.' }
      ]
    },
    {
      npc: 'Golden Lords',
      spawn: 'Behemoth Spawn',
      difficulty: 'Elite',
      missions: [
        { name: 'Collect Materials', description: 'Then bring me 100 perfect behemoth fangs (Behemoth), unholy bones (Undead Dragon), demonic essences (Grim Reaper), and mind stones (Lich). Then I\'ll consider you worthy of bearing the Hero title' },
        { name: 'Kill 1000 of Golden Lord', description: 'Kill 1000 of Golden Lords, that should put an end to whatever they are planning' },
        { name: 'Collect 100 fiery heart', description: 'Then bring me 100 fiery heart (Hellfire Fighter)' }
      ]
    },
    {
      npc: 'Saif',
      spawn: 'Draken Elite Spawn',
      difficulty: 'Elite',
      missions: [
        { name: 'Collect Materials', description: 'Bring me 10x draken sulphurs (dropped by Paiz The Pauperizer), 10x behemoth claws (dropped by Stonecracker), 10x shamanic hoods (dropped by Heartless) and 100x corrupted flags (dropped by Lizard Chosen).' }
      ]
    },
    {
      npc: 'Drakonix',
      spawn: 'Lizard Chosen Spawn',
      difficulty: 'Elite',
      missions: [
        { name: 'Pay 400 gold nuggets', description: 'Prove that you really want to continue the missions with me, I need 400,000,000 golden coins (400 gold nuggets)' },
        { name: 'Kill 2000 Lizards Chosen', description: 'Kill 2000 Lizards Chosen. Be careful and take care of yourself' },
        { name: 'Collect Ferumbras\' hat', description: 'Then bring me Ferumbras\' hat (dropped by Ferumbras)' }
      ]
    },
    {
      npc: 'Marshal Celeste',
      spawn: 'Spidris Spawn',
      difficulty: 'Elite',
      missions: [
        { name: 'Collect Materials', description: 'I want to acquire 100 compound eyes (dropped by Spitter), 100 crawler head platings (dropped by Crawler) and 100 waspoid claws (dropped by Waspoid).' }
      ]
    },
    {
      npc: 'Sara',
      spawn: 'Hellfire Fighter Spawn',
      difficulty: 'Elite',
      missions: [
        { name: 'Collect 1x blue light', description: 'Collect 1x blue light (dropped by Inferno Blob).' },
        { name: 'Collect 1x Quill Pen', description: 'Collect 1x Quill Pen (dropped by Dawn Strayer).' },
        { name: 'Collect 200x Greed\'s arm', description: 'Collect 200x Greed\'s arm (dropped by Fungus Mobs).' }
      ]
    },
    {
      npc: 'Zithrox',
      spawn: 'Acornville Island',
      difficulty: 'Elite',
      missions: [
        { name: 'Collect 500x metal toes', description: 'Loot 500x metal toes (dropped by Malofur Mangrinder).' },
        { name: 'Kill 3000 Mercenarys', description: 'Kill 3000 of Mercenarys.' },
        { name: 'Collect 500x bonelord eyes', description: 'Loot 500x bonelord eyes (dropped by Braindeath) and 500x slimy leaf tentacles (dropped by Ogre Sage).' },
        { name: 'Collect mono detector', description: 'Loot 1x mono detector (dropped by Cursed Ape).' },
        { name: 'Collect music sheets', description: 'Loot 4x music sheets and then return. You can find each music sheet in a different monster, and each monster has its own special sheet.' }
      ]
    },
    {
      npc: 'Zin',
      spawn: 'Vexclaw Spawn',
      difficulty: 'Elite',
      missions: [
        { name: 'Finish NPC Semo Task', description: 'First task is to help my sister, Semo. She is involved in the promotion quest, and you have to find her and give her the sword. You can use Exiva to locate Semo.' },
        { name: 'Kill the Ise boss', description: 'Kill the Ise boss. I don\'t like her; she spies in the Dark Sorcerer\'s cave.' },
        { name: 'Collect goromaphone (Replica)', description: 'Bring me my goromaphone (Replica). You can loot from dread lord Azazel, arachnogar, or venomclaw the tyrant.' }
      ]
    },
    {
      npc: 'Ployus',
      spawn: 'Defiler Spawn',
      difficulty: 'Elite',
      missions: [
        { name: 'Kill the Legendary Warrior boss', description: 'I\'m here to test your strength. If you\'re strong enough to wear legendary warrior\'s outfit, Proceed to the lowest floor, kill the boss, and then return to me.' },
        { name: 'Kill 3000 of Rahemos', description: 'kill 3000 of rahemos, be careful on yourself.' },
        { name: 'Collect Materials', description: 'You need to bring me 100 bamboo sticks (dropped by defiler), 100 black hoods (dropped by vexclaw) and 100 frosty hearts (dropped by azure dragon)... Come back when you will have them.' }
      ]
    },
    {
      npc: 'Burak',
      spawn: 'Azure Dragon Spawn',
      difficulty: 'Elite',
      missions: [
        { name: 'Collect Boss Materials', description: 'Collect 50 star coins, 1x frozen heart (dropped by Frostbite) and 1x crunor\'s heart (dropped by Eldritchbane).' }
      ]
    },
    {
      npc: 'Seth',
      spawn: 'Demon Spawn',
      difficulty: 'Elite',
      missions: [
        { name: 'Eat a rotten heart', description: 'Here in the demon\'s cave, they always say, be strong to become one of us. You have to prove your bravery by eating a rotten heart. You can obtain it from demons, but it appears to be very rare because demons always consume the hearts.' },
        { name: 'Kill 5x Dreadlord Azazel (Demon Boss)', description: 'Now, you have to fight Dreadlord Azazel five times to prove your bravery to him.' },
        { name: 'Kill 3000 Dark Sorcerer', description: 'last thing kill 3000 Dark Sorcerer and come back to me' }
      ]
    },
    {
      npc: 'Jesy',
      spawn: 'Dark Sorcerer Spawn',
      difficulty: 'Elite',
      missions: [
        { name: 'Collect 50 dusk pryer heart', description: 'Then bring me 50 dusk pryer heart(dropped by Dark Sorcerer). and come back to me.' }
      ]
    },
    {
      npc: 'Remon',
      spawn: 'Pirate Island',
      difficulty: 'Legend',
      missions: [
        { name: 'Retrieve 1x Ron the Ripper\'s sabre', description: 'Retrieve 1x Ron the Ripper\'s sabre (dropped by Blackbeard the Ruthless).' },
        { name: 'Collect 100x Brutus Bloodbeard\'s hat', description: 'Collect 100x Brutus Bloodbeard\'s hats (dropped by pirate mobs).' },
        { name: 'Kill Materials', description: 'Collect 100x hooks, 100x Deadeye Devious\' eye patches (dropped by Pirate mobs).' }
      ]
    },
    {
      npc: 'Desoky',
      spawn: 'Pirate Island',
      difficulty: 'Legend',
      missions: [
        { name: 'Kill 10 Blackbeard the Ruthless bosses', description: 'Show me your bravery by defeating 10 Blackbeard the Ruthless bosses, 1000x gold nuggets and 1000x star coins and return to claim your reward' }
      ]
    },
    {
      npc: 'Diee',
      spawn: 'Pirate Island',
      difficulty: 'Legend',
      missions: [
        { name: 'Retrieve Golden Raid Token', description: 'Retrieve 1x golden raid token (dropped by Captain Bloodbeard).' }
      ]
    },
    {
      npc: 'Um Samy',
      spawn: 'War Golem Spawn',
      difficulty: 'Legend',
      missions: [
        { name: 'Kill 15000 war golem', description: 'Kill 15000 of war golem, be careful on yourself.' }
      ]
    },
    {
      npc: 'Seamon',
      spawn: 'Roshamuul Island',
      difficulty: 'Legend',
      missions: [
        { name: 'Kill 10000 guzzlemaw', description: 'Kill 10000 of guzzlemaw.' }
      ]
    },
    {
      npc: 'Abo Talb',
      spawn: 'Roshamuul Island',
      difficulty: 'Legend',
      missions: [
        { name: 'Collect 1x winter warden star', description: 'Retrieve 1x winter warden star (dropped by Guzzlemaw)' },
        { name: 'Kill 10000 frazzlemaw', description: 'Kill 10000 of frazzlemaw' },
        { name: 'Collect 1x omrafir heart', description: 'Retrieve omrafir heart (dropped by omrafir).' }
      ]
    },
    {
      npc: 'Yassen',
      spawn: 'Roshamuul Island',
      difficulty: 'Legend',
      missions: [
        { name: 'Touch 5 Statues', description: 'There are five different statues scattered across the map. Your task is to search for and find each of them. Once you locate a statue, simply touch it. After completing this action with all five statues, return to me' }
      ]
    },
    {
      npc: 'Shehab',
      spawn: 'Roshamuul Island',
      difficulty: 'Legend',
      missions: [
        { name: 'Touch 5 Statues', description: 'There are five different statues scattered across the map. Your task is to search for and find each of them. Once you locate a statue, simply touch it. After completing this action with all five statues, return to me' },
        { name: 'Collect Materials', description: 'Bring me 100x mould robes and 100x distorted hearts(dropped by vorathrax), and once you return, I will reward you for your effort.' },
        { name: 'Collect More Materials', description: 'Then bring me 1x senkken doll(dropped by senkken), 1x power of energy ring(dropped by gloomfire), 100x energy coins(dropped by Tarrasque) and 1x damaged steel helmet (dropped by tyrn).' }
      ]
    },
    {
      npc: 'Edmoty',
      spawn: 'Emerald Island',
      difficulty: 'Legend',
      missions: [
        { name: 'Collect Materials', description: 'I want to acquire a 200 twin sun charms(dropped by Kroazur ) and 500 Unity Tokens (dropped by Jungle Warrior). I look forward to your return with the items I desire.' }
      ]
    },
    {
      npc: 'Ortega',
      spawn: 'Emerald Island',
      difficulty: 'Legend',
      missions: [
        { name: 'Collect Materials', description: 'Then bring me 50 ground reeds, 2000x gold nuggets and 1000x star coins. and come back to me.' }
      ]
    },
    {
      npc: 'Sesmo',
      spawn: 'Emerald Island',
      difficulty: 'Legend',
      missions: [
        { name: 'Collect 300x metal jaws', description: 'Bring me 300x metal jaws (dropped by metal gargoyle), and once you return, I will reward you for your effort.' },
        { name: 'Kill 30000 of Seacrest Serpent', description: 'Kill 30000 of Seacrest Serpent, be careful on yourself.' },
        { name: 'Collect Materials', description: 'Then 100x dream matters, 100x cluster of solaces, 100x fairy wings, 100x aura coins, 100x birds coins and 100x shader tokens.' }
      ]
    },
    {
      npc: 'Xhioylong',
      spawn: 'Emerald Island',
      difficulty: 'Legend',
      missions: [
        { name: 'Kill 5000 Shenlong', description: 'Nice to hear that now kill 5000 Shenlong, I will reward you for your effort.' },
        { name: 'Collect Materials', description: 'you need to bring me 20x moonstones, 800 star coins and 1200 gold nuggets.' },
        { name: '10 Demon Visco', description: 'Excellent! Now, you need to help me by killing 10 Demon Visco.' },
        { name: '10 Meghanada', description: 'Excellent! Now, you need to help me by killing 10 Meghanada.' },
        { name: 'Collect Dolls', description: 'Excellent!bring me 10x outfit dolls, 10x wings dolls, 10x mount dolls.' }
      ]
    },
    {
      npc: 'Wizard Gabriel',
      spawn: 'Spiky Spawn',
      difficulty: 'Legend',
      missions: [
        { name: 'Kill 8000 Rorc', description: 'Great, kill 8000 Rorc and come back to report your mission.' },
        { name: 'Collect Materials', description: 'you need to bring me 10x shadow blueprint, 1000 star coins , 1500 gold nuggets and 3 Evolisca Coins.' },
        { name: 'Kill 10 Jungle Cores', description: 'Excellent! Now, you need to help me by killing 10 Jungle Cores.' }
      ]
    },
    {
      npc: 'Edward',
      spawn: 'Level 2000+ TP Room',
      difficulty: 'Legend',
      missions: [
        { name: 'Collect Materials', description: 'Bring me 200x hard-boiled hydra eggs (dropped by Acid Hydra), 500x star coins, 1000 gold nuggets and once you return, I will reward you for your effort.' },
        { name: 'Collect More Materials', description: 'Bring me 200x tagralt nuggets (dropped by Shenlong), 500x star coins, 1000 gold nuggets and once you return, I will reward you for your effort.' },
        { name: 'Find Seahorse Figurine', description: 'Then bring me 1x sea horse figurine (dropped by Meghanada), 500x star coins, 1000x gold nuggets.' }
      ]
    },
    {
      npc: 'Wasem',
      spawn: 'Jungle Warrior Spawn',
      difficulty: 'Legend',
      missions: [
        { name: 'Collect Materials', description: 'I want to acquire a 200 twin sun charms(dropped by Kroazur ) and 500 Unity Tokens (dropped by Jungle Warrior). I look forward to your return with the items I desire.' }
      ]
    },
    {
      npc: 'Abu Obaida',
      spawn: 'Level 2000+ TP Room',
      difficulty: 'Legendary',
      missions: [
        { name: 'Kill 30,000 Mutated Visco', description: 'Kill 30,000 Mutated Visco.' },
        { name: 'Kill 35,000 Acid Hydra', description: 'Kill 35,000 Acid Hydra.' },
        { name: 'Kill 35,000 Lost Souls', description: 'Kill 35,000 Lost Souls.' },
        { name: 'Collect 3000 gold nuggets and 2000 star coins', description: 'I am in need of making some repairs in the house, so I would like some financial assistance from you (3000 gold nuggets and 2000 star coins).' },
        { name: 'Kill 15 Jungle Warrior bosses', description: 'Your task kill 15 from Jungle Warrior boss (Primeval Chieftain).' },
        { name: 'Collect Materials', description: 'Bring me 500x ectoplasmic sushi and 500x draken sulphur (dropped by Draken Warmaster).' },
        { name: 'Kill Bosses in order', description: 'Kill these monsters in order: 1 Infectanus, 1 Blackbeard the Ruthless, 1 Cerberus, 1 Demon Visco and 1 Shenlong Lord. If not in this order, task will be restarted.' },
        { name: 'Touch the tree in Jungle Warrior spawn', description: 'Now is the time for strength and speed. You have five minutes to touch the tree in the mission and return to me again the tree located in Jungle Warrior spawn.' },
        { name: 'Kill 1250 raid bosses', description: 'Kill 1250 raid bosses.' },
        { name: 'Kill 60000 Boogy', description: 'So, you need to kill 60000 Boogy. Come back when you will finish my task.' },
        { name: 'Find Empty Cask', description: 'I\'m having trouble storing enough water for drinking, so I need your help to find an empty cask. This will allow me to save water for myself and my children. You can find the cask in the Sot Quest.' },
        { name: 'Collect 5000 star coins and 8000 gold nuggets', description: 'Now, I need money to buy things for my children, and I\'m planning to leave Evolisca to purchase a new house in another city. I want to gather the funds I need, which amounts to 5000 star coins and 8000 gold nuggets. As a fair reward for your assistance, I\'m offering 5 talent points.' },
        { name: 'Collect three Life Serums', description: 'I\'m having trouble storing enough water for drinking, so I need your help to find an empty cask. This will allow me to save water for myself and my children. You can find the cask in the Sot Quest.' },
        { name: 'Collect 800 peacock feather fans', description: 'So, I require 800 peacock feather fans (dropped by Rorc). Once you return with them, I\'ll reward you generously..' },
        { name: 'Collect 10 vials of Hatred', description: 'Have you heard about the Arcanum boss? I know it\'s very strong. However, I\'m determined to obtain 10 vials of Hatred so I can reward you.' },
        { name: 'Collect Dolls', description: 'Nice, i need 15 outfit doll - mounts doll - wings doll - shader doll- aura doll - birds doll and 3000 star coin and i will reward you good.' },
        { name: 'Collect 15 Moonstone', description: 'Nice, i need 15x moonstone' },
        { name: 'Collect 5 Fig leafs', description: 'Nice, i need 5 fig leafs(dropped by Blizzard).' },
        { name: 'Kill Crystal Spider Boss (Crystarax)', description: 'The Crystal Spider has a boss, but to summon this boss, you need to show your power by killing the spiders until the boss appears.' }
      ]
    }
  ];

  const questTypes = [
    {
      type: 'Collection Quests',
      description: 'Hunt down specific items dropped by creatures and bring them to NPCs. These quests reward you for your persistence and resourcefulness.',
      icon: '📦'
    },
    {
      type: 'Monster Slaying',
      description: 'Defeat a specified quantity of monsters to prove your combat prowess. The higher the count, the greater the challenge and reward.',
      icon: '⚔️'
    },
    {
      type: 'Exploration & Riddles',
      description: 'Search for hidden objects, touch statues, or solve puzzles. These quests encourage you to explore new areas and think creatively.',
      icon: '🔍'
    },
    {
      type: 'Boss Encounters',
      description: 'Face legendary creatures in challenging duels. Defeating bosses is a true test of your skill and preparation.',
      icon: '👹'
    }
  ];

  const rewards = [
    {
      title: 'Talent Points',
      description: 'Earn talent points to unlock powerful abilities and enhance your character\'s specialization. These are crucial for character progression.',
      color: '#fbbf24'
    },
    {
      title: 'Outfits & Cosmetics',
      description: 'Collect unique outfits and visual upgrades to customize your character\'s appearance and show off your achievements.',
      color: '#ec4899'
    },
    {
      title: 'Mounts & Companions',
      description: 'Unlock rideable mounts and companion creatures that enhance your mobility and provide awesome visual effects.',
      color: '#06b6d4'
    },
    {
      title: 'Valuable Items & Currency',
      description: 'Gather gold nuggets, star coins, and rare treasures that can be used for upgrades, gear, or trading with other players.',
      color: '#10b981'
    }
  ];

  const getDifficultyColor = (difficulty) => {
    const colors = {
      'Beginner': '#10b981',
      'Intermediate': '#3b82f6',
      'Advanced': '#f59e0b',
      'Elite': '#ef4444',
      'Legend': '#8b5cf6',
      'Legendary': '#d946ef'
    };
    return colors[difficulty] || '#6b7280';
  };

  const getDifficultyBgColor = (difficulty) => {
    const colors = {
      'Beginner': '#10b98120',
      'Intermediate': '#3b82f620',
      'Advanced': '#f59e0b20',
      'Elite': '#ef444420',
      'Legend': '#8b5cf620',
      'Legendary': '#d946ef20'
    };
    return colors[difficulty] || '#6b728020';
  };

  return (
    <main className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <section className="hero-grid">
        <div className="hero-copy panel hero-panel">
          <span className="eyebrow">Daily Opportunities</span>
          <h1>NPC Quests & Missions</h1>
          <p>
            Grow your character through daily NPC quests. Earn rewards, unlock cosmetics, and prove your worth across the lands of Evolisca.
          </p>
        </div>

        <aside className="panel side-panel">
          <div className="panel-header">
            <span className="eyebrow">Getting Started</span>
            <h2>How to Find Quests</h2>
          </div>

          <div className="start-list">
            <div className="start-item">
              <span className="start-dot" />
              <p><strong>Use the Quest Tracker</strong> - Open your quest tracker button in the client to see NPC quest details, progress, and instructions.</p>
            </div>
            <div className="start-item">
              <span className="start-dot" />
              <p><strong>Use Exiva Spell</strong> - Type <code style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '2px 6px', borderRadius: '4px' }}>exiva "NPC Name"</code> to locate NPCs quickly.</p>
            </div>
            <div className="start-item">
              <span className="start-dot" />
              <p><strong>Visit Spawn Points</strong> - NPCs typically hang out near the creatures they offer quests for.</p>
            </div>
          </div>
        </aside>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Quest Variety</span>
            <h2>Types of Quests</h2>
            <p>NPC quests come in many forms, each offering unique challenges and rewards for adventurers of all levels.</p>
          </div>
        </div>

        <div style={{ display: 'grid', gap: '14px', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
          {questTypes.map((item) => (
            <div key={item.type} className="panel" style={{ padding: '20px', borderRadius: '14px', display: 'grid', gap: '12px' }}>
              <div style={{ fontSize: '28px' }}>{item.icon}</div>
              <h3 style={{ margin: '0', fontSize: '1.05rem' }}>{item.type}</h3>
              <p style={{ margin: '0', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Progression Rewards</span>
            <h2>What You Can Earn</h2>
            <p>Completing NPC quests unlocks an exciting array of rewards that enhance your character and gameplay.</p>
          </div>
        </div>

        <div style={{ display: 'grid', gap: '14px' }}>
          {rewards.map((reward) => (
            <div
              key={reward.title}
              className="panel"
              style={{
                padding: '18px 20px',
                borderRadius: '14px',
                border: '1px solid var(--line)',
                display: 'grid',
                gap: '8px'
              }}
            >
              <h3 style={{ margin: '0', color: 'var(--text)' }}>{reward.title}</h3>
              <p style={{ margin: '0', color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{reward.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Complete Directory</span>
            <h2>All NPC Quests</h2>
            <p>Browse through all available NPC quests organized by difficulty. Choose your path and start your quest journey!</p>
          </div>
        </div>

        <div style={{ display: 'grid', gap: '16px' }}>
          {npcQuests.map((quest) => (
            <article
              key={quest.npc}
              className="panel"
              style={{
                padding: '18px 20px',
                borderRadius: '14px',
                border: '1px solid var(--line)'
              }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  gap: '16px',
                  alignItems: 'start',
                  marginBottom: '16px'
                }}
              >
                <div>
                  <h3 style={{ margin: '0 0 4px 0', fontSize: '1.1rem' }}>{quest.npc}</h3>
                  <p style={{ margin: '0', color: 'var(--text-muted)', fontSize: '0.9rem' }}>{quest.spawn}</p>
                </div>

                <span
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)',
                    whiteSpace: 'nowrap',
                    alignSelf: 'start',
                    padding: '4px 0'
                  }}
                >
                  {quest.difficulty}
                </span>
              </div>

              <div style={{ display: 'grid', gap: '10px', paddingTop: '12px', borderTop: '1px solid var(--line)' }}>
                {quest.missions.map((mission, idx) => (
                  <div key={`${quest.npc}-mission-${idx}`} style={{ display: 'grid', gap: '4px' }}>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text)', fontWeight: '500' }}>
                      {idx + 1}. {mission.name}
                    </span>
                    <p style={{ margin: '0', color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.5, paddingLeft: '16px' }}>
                      {mission.description}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="panel focus-panel">
          <div>
            <span className="eyebrow">Pro Tips</span>
            <h2>Maximize Your Quest Experience</h2>
            <p>
              Make the most of your NPC quest journey with these helpful strategies.
            </p>
          </div>

          <div className="focus-points">
            <div>
              <strong>🎯 Track Multiple Quests</strong>
              <p>Work on multiple NPC quests simultaneously to maximize your rewards per hunting session.</p>
            </div>
            <div>
              <strong>💡 Plan Your Route</strong>
              <p>Group quests by spawn location to farm efficiently and avoid wasting time traveling.</p>
            </div>
            <div>
              <strong>⚡ Progressive Difficulty</strong>
              <p>Start with beginner quests and work your way up to legendary challenges as you grow stronger.</p>
            </div>
            <div>
              <strong>🎁 Reinvest Your Rewards</strong>
              <p>Use talent points to enhance your character and gear up with quest rewards for better farming potential.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="panel" style={{ padding: '24px', borderRadius: '16px', textAlign: 'center', border: '1px solid var(--line)' }}>
          <h2 style={{ margin: '0 0 12px 0' }}>Ready to Begin Your Adventure?</h2>
          <p style={{ margin: '0 0 16px 0', color: 'var(--text-muted)', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto' }}>
            Pick an NPC quest that matches your level, gather your supplies, and start your journey toward legendary status on the Evolisca server!
          </p>
          <Link href="/npcs" style={{ display: 'inline-block' }}>
            <span
              style={{
                padding: '8px 16px',
                borderRadius: '6px',
                border: '1px solid var(--line)',
                color: 'var(--text)',
                cursor: 'pointer',
                fontSize: '0.9rem'
              }}
            >
              Find NPCs
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
