"use client";

import { useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import "./cosmetics.css";

const cosmeticsData = {
  outfits: [
    { name: "Citizen", obtained: "Semna Npc", required: "Obtained from Addon doll", image: "/cosmetics/outfits/citizen.gif" },
    { name: "Hunter", obtained: "Sabry Npc", required: "Obtained from Addon doll", image: "/cosmetics/outfits/hunter.gif" },
    { name: "Mage", obtained: "Drakonix Npc", required: "Ferumbras hat from Ferumbras raid, traded with NPC in Lizard Chosen spawn", image: "/cosmetics/outfits/mage.gif" },
    { name: "Knight", obtained: "Cosmetics Npc", required: "15x Gold Nuggets, 10x Star Coins, 2x Cluster of Solaces, 2x Huge Chunk of Crude Irons", image: "/cosmetics/outfits/knight.gif" },
    { name: "Noble", obtained: "Cosmetics Npc", required: "30x Gold Nuggets", image: "/cosmetics/outfits/noble.gif" },
    { name: "Summoner", obtained: "Salem Npc", required: "Obtained from Addon doll", image: "/cosmetics/outfits/summoner.gif" },
    { name: "Warrior", obtained: "Cosmetics Npc", required: "200x Gold Nuggets, 100x Star Coins, 6x Cluster of Solaces, 1x Dragon Claw", image: "/cosmetics/outfits/warrior.gif" },
    { name: "Barbarian", obtained: "Cosmetics Npc", required: "200x Gold Nuggets, 100x Star Coins, 6x Cluster of Solaces, 1x Ruthless Axe", image: "/cosmetics/outfits/barbarian.gif" },
    { name: "Druid", obtained: "Cosmetics Npc", required: "40x Gold Nuggets, 30x Star Coins, 3x Cluster of Solaces, 1x Wolf Tooth Chain", image: "/cosmetics/outfits/druid.gif" },
    { name: "Wizard", obtained: "Cosmetics Npc", required: "70x Gold Nuggets, 50x Star Coins, 3x Cluster of Solaces, 50x Holy Orchid", image: "/cosmetics/outfits/wizard.gif" },
    { name: "Oriental", obtained: "Cosmetics Npc", required: "150x Gold Nuggets, 80x Star Coins, 5x Cluster of Solaces, 1x Coral Comb", image: "/cosmetics/outfits/oriental.gif" },
    { name: "Pirate", obtained: "Cosmetics Npc", required: "100x Gold Nuggets, 60x Star Coins, 3x Cluster of Solaces, 1x Sabre", image: "/cosmetics/outfits/pirate.gif" },
    { name: "Assassin", obtained: "Cosmetics Npc", required: "200x Gold Nuggets, 100x Star Coins, 3x Cluster of Solaces, 400x Fish", image: "/cosmetics/outfits/assassin.gif" },
    { name: "Beggar", obtained: "Cosmetics Npc", required: "35x Gold Nuggets, 20x Star Coins, 2x Cluster of Solaces, 20x Ape Fur", image: "/cosmetics/outfits/beggar.gif" },
    { name: "Shaman", obtained: "Cosmetics Npc", required: "100x Gold Nuggets, 50x Star Coins, 4x Cluster of Solaces, 1x Mandrakes", image: "/cosmetics/outfits/shaman.gif" },
    { name: "Norse", obtained: "Cosmetics Npc", required: "80x Gold Nuggets, 40x Star Coins, 3x Cluster of Solaces, 200x Shards", image: "/cosmetics/outfits/norse.gif" },
    { name: "Nightmare", obtained: "Cosmetics Npc", required: "200x Gold Nuggets, 100x Star Coins, 6x Cluster of Solaces, 500x Demonic Essences", image: "/cosmetics/outfits/nightmare.gif" },
    { name: "Jester", obtained: "Cosmetics Npc", required: "50x Gold Nuggets, 30x Star Coins, 3x Cluster of Solaces, 1x Jester Doll (rare)", image: "/cosmetics/outfits/jester.gif" },
    { name: "Brotherhood", obtained: "Cosmetics Npc", required: "350x Gold Nuggets, 100x Star Coins, 10x Cluster of Solaces, 5x Spying Eye", image: "/cosmetics/outfits/brotherhood.gif" },
    { name: "Demonhunter", obtained: "Cosmetics Npc", required: "350x Gold Nuggets, 100x Star Coins, 10x Cluster of Solaces, 200x Vampire Dust", image: "/cosmetics/outfits/demonhunter.gif" },
  ],
  wings: [
    { name: "Ember Wings", obtained: "Store and Wings Doll", source: "from store and dolls" },
    { name: "Space Wings", obtained: "Store and Wings Doll", source: "from store and dolls" },
    { name: "Demonic Skull Wings", obtained: "Store and Wings Doll", source: "from store and dolls" },
    { name: "Spotted Wings", obtained: "Store and Wings Doll", source: "from store and dolls" },
    { name: "Fires Embrace Wings", obtained: "Store and Wings Doll", source: "from store and dolls" },
    { name: "Smokey Clouds Wings", obtained: "Store and Wings Doll", source: "from store and dolls" },
    { name: "Skeletal Wings", obtained: "Store and Wings Doll", source: "from store and dolls" },
    { name: "Archangel Wings", obtained: "Store and Wings Doll", source: "from store and dolls" },
    { name: "Shadow Hands Wings", obtained: "Store and Wings Doll", source: "from store and dolls" },
    { name: "Boned Dragon Wings", obtained: "Store and Wings Doll", source: "from store and dolls" },
    { name: "Feathered Wings", obtained: "Store and Wings Doll", source: "from store and dolls" },
    { name: "Charged Wings", obtained: "Store and Wings Doll", source: "from store and dolls" },
    { name: "Feather Tipped Fairy Wings", obtained: "Store and Wings Doll", source: "from store and dolls" },
    { name: "Blood Horns Wings", obtained: "Store and Wings Doll", source: "from store and dolls" },
    { name: "Enchanted Twig Wings", obtained: "Store and Wings Doll", source: "from store and dolls" },
    { name: "Hellcore Wings", obtained: "Store and Wings Doll", source: "from store and dolls" },
    { name: "Ancient Wings", obtained: "Store and Wings Doll", source: "from store and dolls" },
    { name: "Magma Wings", obtained: "Store and Wings Doll", source: "from store and dolls" },
    { name: "Butterfly Wings", obtained: "Store and Wings Doll", source: "from store and dolls" },
    { name: "Angel Wings", obtained: "Sara Npc", source: "from npc Sara" },
    { name: "Parrot Wings", obtained: "Mine Dungeon", source: "from Mine dung" },
    { name: "Red Diamond Wings", obtained: "Store", source: "from store" },
    { name: "Energy Wings", obtained: "Store", source: "from store" },
    { name: "Bora Wings", obtained: "Event Token NPC", source: "from event token npc" },
    { name: "Green Crystal Wings", obtained: "Dungeon 2500", source: "from dungeon 2500" },
    { name: "Golden Wings", obtained: "Store and Doll", source: "from store and doll" },
    { name: "Menelaus Blue Wings", obtained: "Store and Dolls", source: "from store and dolls" },
    { name: "Chocolate Wings", obtained: "Store and Dolls", source: "from store and dolls" },
    { name: "Rainbow Wings", obtained: "Dungeon 3.5k", source: "from dung 3.5k" },
    { name: "Electromagnetic Wings", obtained: "Dungeon 3000", source: "from dungeon 3000" },
    { name: "Electric Wings", obtained: "Store", source: "from store" },
    { name: "Steel Wings", obtained: "Dungeon NPC", source: "from dungeon npc for tokens" },
    { name: "Solarborn Wings", obtained: "Store", source: "from store" },
    { name: "Voidfeather Wings", obtained: "Store", source: "from store" },
  ],
  auras: [
    { name: "Blood Circle", obtained: "Store and Auras Doll", source: "dolls or store" },
    { name: "Shadow Minions", obtained: "Store and Auras Doll", source: "dolls or store" },
    { name: "Rising Blood Skulls", obtained: "Store and Auras Doll", source: "dolls or store" },
    { name: "Blood Pool", obtained: "Store and Auras Doll", source: "dolls or store" },
    { name: "Fierce Aura", obtained: "Store and Auras Doll", source: "dolls or store" },
    { name: "Water Droplets", obtained: "Store and Auras Doll", source: "dolls or store" },
    { name: "Death Ring", obtained: "Store and Auras Doll", source: "dolls or store" },
    { name: "Energy Aura", obtained: "Store and Auras Doll", source: "dolls or store" },
    { name: "Evil Aura", obtained: "Store and Auras Doll", source: "dolls or store" },
    { name: "Angel's Crown Aura", obtained: "Store and Auras Doll", source: "dolls or store" },
    { name: "Fierce Stars Aura", obtained: "Store and Auras Doll", source: "dolls or store" },
    { name: "Fire Circle", obtained: "Store and Auras Doll", source: "dolls or store" },
    { name: "Orbs Circle", obtained: "Store and Auras Doll", source: "dolls or store" },
    { name: "Spiritual Energy", obtained: "Store and Auras Doll", source: "dolls or store" },
    { name: "Blue Aurora", obtained: "Store and Auras Doll", source: "dolls or store" },
    { name: "Blue Orbs", obtained: "Store and Auras Doll", source: "dolls or store" },
    { name: "Obliterating Aura", obtained: "Store and Auras Doll", source: "dolls or store" },
    { name: "Fire Bender", obtained: "Store and Auras Doll", source: "dolls or store" },
    { name: "Sacred Aura", obtained: "Store and Auras Doll", source: "dolls or store" },
    { name: "Soulfire Aura", obtained: "Store and Auras Doll", source: "dolls or store" },
    { name: "Courage Aura", obtained: "Store and Auras Doll", source: "dolls or store" },
    { name: "White Flash", obtained: "Store and Auras Doll", source: "dolls or store" },
    { name: "Hydrogen", obtained: "Store and Auras Doll", source: "dolls or store" },
    { name: "Shine Effect", obtained: "Store and Auras Doll", source: "dolls or store" },
    { name: "Pollution Aura", obtained: "Store and Auras Doll", source: "dolls or store" },
    { name: "Electric Aura", obtained: "Store", source: "from store" },
    { name: "Green Crystal Aura", obtained: "Draken Elite NPC", source: "used in draken elite npc" },
    { name: "Red Diamond Aura", obtained: "Dungeon Power Chest", source: "from Dungeon Power Chest" },
    { name: "Bora Aura", obtained: "Dungeon 2500", source: "from dungeon 2500" },
    { name: "Orbs Aura", obtained: "Store and Auras Doll", source: "dolls or store" },
    { name: "Amaterasu Aura", obtained: "Dungeon 2000", source: "from dung 2000" },
    { name: "Electromagnetic Aura", obtained: "Store", source: "from store" },
    { name: "Floating Aura", obtained: "Store and Auras Doll", source: "dolls or store" },
    { name: "Energy Balls Aura", obtained: "Event Token NPC", source: "from event token npc" },
    { name: "Heavenly Aura", obtained: "Dungeon 3000", source: "from dung 3000" },
    { name: "Red Radiant Aura", obtained: "Dungeon NPC", source: "from dungeon npc for tokens" },
    { name: "Soulflare Aura", obtained: "Store", source: "from store" },
    { name: "Void Aura", obtained: "Solo Maza", source: "from solo maza" },
    { name: "Storm Aura", obtained: "Solo Maza", source: "from solo maza" },
    { name: "Shadowcoil Aura", obtained: "Store", source: "from store" },
    { name: "Cerulean Veil Aura", obtained: "Store", source: "from store" },
    { name: "Life Pulse Aura", obtained: "Store", source: "from store" },
    { name: "Flame Aura", obtained: "Solo Maza", source: "from solo maza" },
    { name: "Celestial Gold Aura", obtained: "Store", source: "from store" },
    { name: "Wraithfire Aura", obtained: "Store", source: "from store" },
    { name: "Chromaflux Aura", obtained: "Store", source: "from store" },
    { name: "Toxic Halo Aura", obtained: "Store", source: "from store" },
    { name: "Mystic Spark Aura", obtained: "Store", source: "from store" },
    { name: "Arcana Codex Aura", obtained: "Store", source: "from store" },
  ],
  mounts: [
    { name: "Widow Queen", obtained: "Wailing Widow Boss", source: "loot from Wailing Widow boss" },
    { name: "Racing Bird", obtained: "Orion Npc", source: "from Orion Npc" },
    { name: "War Bear", obtained: "Cosmetics Npc", source: "Cosmetics npc" },
    { name: "Black Sheep", obtained: "Cosmetics Npc", source: "Cosmetics npc" },
    { name: "Midnight Panther", obtained: "Ancient Scarab Boss", source: "loot from ancient scarab boss in daily reward" },
    { name: "Draptor", obtained: "Draptor Monster", source: "loot from draptor monster" },
    { name: "Titanica", obtained: "Cosmetics Npc", source: "Cosmetics npc" },
    { name: "Tin Lizzard", obtained: "Cosmetics Npc", source: "Cosmetics npc" },
    { name: "Blazebringer", obtained: "Cosmetics Npc", source: "Cosmetics npc" },
    { name: "Rapid Boar", obtained: "Apes Dung", source: "apes dung" },
    { name: "Stampor", obtained: "Stampor Monster", source: "loot from items from Stampor and change from npc" },
    { name: "Undead Cavebear", obtained: "Undead Cavebear", source: "loot from items from Undead Cavebear" },
    { name: "Donkey", obtained: "Cosmetics Npc", source: "Cosmetics npc" },
    { name: "Tiger Slug", obtained: "Desert Dungeon", source: "desert dungeon reward" },
    { name: "Uniwheel", obtained: "Cosmetics Npc", source: "Cosmetics npc" },
    { name: "Crystal Wolf", obtained: "Cosmetics Npc", source: "Cosmetics npc" },
    { name: "War Horse", obtained: "Cosmetics Npc", source: "Cosmetics npc" },
    { name: "Kingly Deer", obtained: "Cosmetics Npc", source: "Cosmetics npc" },
    { name: "Tamed Panda", obtained: "Boss Drops", source: "loot carrot on a stick from bosses" },
    { name: "Dromedary", obtained: "Dromedary Monster", source: "loot from Dromedary and use on Dromedary" },
    { name: "Scorpion King", obtained: "Craft", source: "from craft" },
    { name: "Rented Horse", obtained: "Store", source: "from store" },
    { name: "Armoured War Horse", obtained: "Store", source: "from store" },
    { name: "Shadow Draptor", obtained: "Online Points NPC", source: "from online points npc for online points" },
    { name: "Lady Bug", obtained: "Boss Drops", source: "loot from drake and behmo and grim bosses" },
    { name: "Manta Ray", obtained: "Manta Ray Raid", source: "from Manta Ray raid" },
    { name: "Ironblight", obtained: "Survivor Dungeon", source: "survivor dungeon reward" },
    { name: "Magma Crawler", obtained: "Holocaust Dungeon", source: "holocaust dungeon reward" },
    { name: "Dragonling", obtained: "Cosmetics Npc", source: "Cosmetics npc" },
    { name: "Gnarlhound", obtained: "Cosmetics Npc", source: "Cosmetics npc" },
    { name: "Crimson Ray", obtained: "Craft", source: "from craft" },
    { name: "Steelbeak", obtained: "Steelbeak Hunt Quest", source: "quest in steelbeak hunt" },
    { name: "Water Buffalo", obtained: "Cosmetics Npc", source: "Cosmetics npc" },
    { name: "Tombstinger", obtained: "Level 200 Reward", source: "auto reward in level 200" },
    { name: "Platesaurian", obtained: "Level 600 Reward", source: "auto reward in level 600" },
    { name: "Ursagrodon", obtained: "Boss Drops", source: "loot from bosses [Infectanus till Actors Power]" },
    { name: "The Hellgrip", obtained: "Crushed Chest", source: "crusd chest reward" },
    { name: "Noble Lion", obtained: "Cosmetics Npc", source: "Cosmetics npc" },
    { name: "Desert King", obtained: "Store", source: "from store" },
    { name: "Shock Head", obtained: "Nerubian Monster", source: "auto tame when kill nerubian monster" },
    { name: "Walker", obtained: "Walker Monster", source: "auto tame when kill Walker monster in new island 300" },
    { name: "Azudocus", obtained: "Store and Cosmetics", source: "store and Cosmetics npc" },
    { name: "Carpacosaurus", obtained: "Store and Cosmetics", source: "store and Cosmetics npc" },
    { name: "Death Crawler", obtained: "Store and Cosmetics", source: "store and Cosmetics npc" },
    { name: "Flamesteed", obtained: "Store and Cosmetics", source: "store and Cosmetics npc" },
    { name: "Jade Lion", obtained: "Store and Cosmetics", source: "store and Cosmetics npc" },
    { name: "Jade Pincer", obtained: "Store and Cosmetics", source: "store and Cosmetics npc" },
    { name: "Nethersteed", obtained: "Store", source: "from store" },
    { name: "Tempest", obtained: "Level 1200 Reward", source: "auto reward in level 1200" },
    { name: "Winter King", obtained: "Store and Cosmetics", source: "store and Cosmetics npc" },
    { name: "Doombringer", obtained: "Store and Cosmetics", source: "store and Cosmetics npc" },
    { name: "Woodland Prince", obtained: "Roulette System", source: "roulette_system" },
    { name: "Hailstorm Fury", obtained: "Cosmetics Npc", source: "Cosmetics npc" },
    { name: "Siegebreaker", obtained: "Store and Cosmetics", source: "store and Cosmetics npc" },
    { name: "Poisonbane", obtained: "Store and Cosmetics", source: "store and Cosmetics npc" },
    { name: "Blackpelt", obtained: "Craft", source: "from craft" },
    { name: "Golden Dragonfly", obtained: "Cosmetics Npc", source: "Cosmetics npc" },
    { name: "Steel Bee", obtained: "Craft", source: "from craft" },
    { name: "Copper Fly", obtained: "Store", source: "from store" },
    { name: "Tundra Rambler", obtained: "Store and Cosmetics", source: "store and Cosmetics npc" },
    { name: "Highland Yak", obtained: "Store and Cosmetics", source: "store and Cosmetics npc" },
    { name: "Glacier Vagabond", obtained: "Store and Cosmetics", source: "store and Cosmetics npc" },
    { name: "Flying Divan", obtained: "Store and Cosmetics", source: "store and Cosmetics npc" },
    { name: "Magic Carpet", obtained: "Store and Cosmetics", source: "store and Cosmetics npc" },
    { name: "Floating Kashmir", obtained: "Store and Cosmetics", source: "store and Cosmetics npc" },
    { name: "Ringtail Waccoon", obtained: "Random Box", source: "from random box" },
    { name: "Night Waccoon", obtained: "Store", source: "from store" },
    { name: "Emerald Waccoon", obtained: "Cosmetics Npc", source: "Cosmetics npc" },
    { name: "Glooth Glider", obtained: "Store", source: "from store" },
    { name: "Shadow Hart", obtained: "Cosmetics Npc", source: "Cosmetics npc" },
    { name: "Black Stag", obtained: "Cosmetics Npc", source: "Cosmetics npc" },
    { name: "Emperor Deer", obtained: "Store", source: "from store" },
    { name: "Flitterkatzen", obtained: "Hakem Npc", source: "from npc hakem in new island 300" },
    { name: "Venompaw", obtained: "Store", source: "from store" },
    { name: "Batcat", obtained: "Store", source: "from store" },
    { name: "Sea Devil", obtained: "Store and Cosmetics", source: "store and Cosmetics npc" },
    { name: "Coralripper", obtained: "Store", source: "from store" },
    { name: "Plumfish", obtained: "Store", source: "from store" },
    { name: "Gorongra", obtained: "Cosmetics Npc", source: "Cosmetics npc" },
    { name: "Noctungra", obtained: "Store", source: "from store" },
    { name: "Silverneck", obtained: "The Hive Task", source: "from The Hive task in daily npc missions" },
  ],
  birds: [
    { name: "Spectre", obtained: "Store and Birds Doll" },
    { name: "Esabon", obtained: "Store and Birds Doll" },
    { name: "Green Bat", obtained: "Store and Birds Doll" },
    { name: "Ynremr", obtained: "Store and Birds Doll" },
    { name: "Bast", obtained: "Store and Birds Doll" },
    { name: "Lorenna", obtained: "Store and Birds Doll" },
    { name: "Iatosr", obtained: "Store and Birds Doll" },
    { name: "Flamebringer", obtained: "Store and Birds Doll" },
    { name: "Magmortar", obtained: "Store and Birds Doll" },
  ],
};

export default function CosmeticsPage() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");

  // Flatten all cosmetics with their type for easier searching
  const allCosmetics = [
    ...cosmeticsData.outfits.map((item) => ({ ...item, type: "Outfit" })),
    ...cosmeticsData.wings.map((item) => ({ ...item, type: "Wings" })),
    ...cosmeticsData.auras.map((item) => ({ ...item, type: "Aura" })),
    ...cosmeticsData.mounts.map((item) => ({ ...item, type: "Mount" })),
    ...cosmeticsData.birds.map((item) => ({ ...item, type: "Bird" })),
  ];

  // Filter based on search query (including requirements)
  const filteredCosmetics = allCosmetics.filter((cosmetic) => {
    const query = searchQuery.toLowerCase();
    const requiredText = cosmetic.required ? cosmetic.required.toLowerCase() : '';
    const sourceText = cosmetic.source ? cosmetic.source.toLowerCase() : '';
    return (
      cosmetic.name.toLowerCase().includes(query) ||
      cosmetic.obtained.toLowerCase().includes(query) ||
      cosmetic.type.toLowerCase().includes(query) ||
      requiredText.includes(query) ||
      sourceText.includes(query)
    );
  });

  // Organize filtered results by type
  const filteredByType = {
    outfits: filteredCosmetics.filter((c) => c.type === "Outfit"),
    wings: filteredCosmetics.filter((c) => c.type === "Wings"),
    auras: filteredCosmetics.filter((c) => c.type === "Aura"),
    mounts: filteredCosmetics.filter((c) => c.type === "Mount"),
    birds: filteredCosmetics.filter((c) => c.type === "Bird"),
  };

  const isSearchActive = searchQuery.trim().length > 0;

  return (
    <main className="page-shell">
      <div className="cosmetics-content">
        {/* Header */}
        <div className="cosmetics-header">
          <h1>{t('page.cosmetics.title')}</h1>
          <p className="cosmetics-intro">
            {t('page.cosmetics.intro')}
          </p>

          {/* Search Bar */}
          <div className="cosmetics-search-container">
            <div className="search-input-wrapper">
              <input
                type="text"
                placeholder={t('page.cosmetics.search-placeholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="cosmetics-search-input"
                aria-label={t('page.cosmetics.search-aria')}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="search-clear-btn"
                  aria-label={t('page.cosmetics.clear-aria')}
                >
                  ✕
                </button>
              )}
            </div>
            {isSearchActive && (
              <div className="search-results-info">
                Found {filteredCosmetics.length} cosmetic{filteredCosmetics.length !== 1 ? "s" : ""} matching "{searchQuery}" (by name, type, source, or requirements)
              </div>
            )}
            <p className="search-hint">💡 Search across the entire wiki with <a href="/search" className="search-link">Global Search</a> to find items, spells, creatures, and more</p>
          </div>
        </div>

        {/* Outfits Section */}
        {(!isSearchActive || filteredByType.outfits.length > 0) && (
          <section className="cosmetics-section">
            <h2>Outfits</h2>
            <p className="section-description">
              Express your character's identity with a wide variety of outfits. Each outfit brings a unique style and personality to your character while granting talent points.
            </p>
            <div className="cosmetics-grid">
              {(isSearchActive ? filteredByType.outfits : cosmeticsData.outfits).map((outfit, idx) => (
                <div key={idx} className="cosmetic-card">
                  <div className="cosmetic-image-wrapper">
                    <img src={outfit.image} alt={outfit.name} className="cosmetic-image" />
                  </div>
                  <div className="cosmetic-info">
                    <h3>{outfit.name}</h3>
                    <p className="obtained-from">
                      <strong>Obtained from:</strong> {outfit.obtained}
                    </p>
                    <p className="required-items">
                      <strong>Required:</strong> {outfit.required}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {isSearchActive && filteredByType.outfits.length === 0 && (
              <p className="no-results">No outfits match your search.</p>
            )}
          </section>
        )}

        {/* Wings Section */}
        {(!isSearchActive || filteredByType.wings.length > 0) && (
          <section className="cosmetics-section">
            <h2>Wings</h2>
            <p className="section-description">
              Take flight with magnificent wings that showcase your power and elegance. Wings add visual flair to your character and contribute to your talent point collection.
            </p>
            <div className="cosmetics-grid cosmetics-grid-small">
              {(isSearchActive ? filteredByType.wings : cosmeticsData.wings).map((wing, idx) => (
                <div key={idx} className="cosmetic-card-compact">
                  <h4>{wing.name}</h4>
                  <p className="obtained-from-compact">{wing.obtained}</p>
                </div>
              ))}
            </div>
            {isSearchActive && filteredByType.wings.length === 0 && (
              <p className="no-results">No wings match your search.</p>
            )}
          </section>
        )}

        {/* Auras Section */}
        {(!isSearchActive || filteredByType.auras.length > 0) && (
          <section className="cosmetics-section">
            <h2>Auras</h2>
            <p className="section-description">
              Surround yourself with mystical auras that radiate power and presence. These visual effects enhance your character's appearance and provide talent points.
            </p>
            <div className="cosmetics-grid cosmetics-grid-small">
              {(isSearchActive ? filteredByType.auras : cosmeticsData.auras).map((aura, idx) => (
                <div key={idx} className="cosmetic-card-compact">
                  <h4>{aura.name}</h4>
                  <p className="obtained-from-compact">{aura.obtained}</p>
                </div>
              ))}
            </div>
            {isSearchActive && filteredByType.auras.length === 0 && (
              <p className="no-results">No auras match your search.</p>
            )}
          </section>
        )}

        {/* Mounts Section */}
        {(!isSearchActive || filteredByType.mounts.length > 0) && (
          <section className="cosmetics-section">
            <h2>🐴 Mounts</h2>
            <p className="section-description">
              Ride into battle with majestic mounts that showcase your power and style. From legendary beasts to magical creatures, choose the perfect companion for your journey while earning talent points with each new mount.
            </p>
            <div className="cosmetics-grid cosmetics-grid-small">
              {(isSearchActive ? filteredByType.mounts : cosmeticsData.mounts).map((mount, idx) => (
                <div key={idx} className="cosmetic-card-compact">
                  <h4>{mount.name}</h4>
                  <p className="obtained-from-compact">{mount.obtained}</p>
                </div>
              ))}
            </div>
            {isSearchActive && filteredByType.mounts.length === 0 && (
              <p className="no-results">No mounts match your search.</p>
            )}
          </section>
        )}

        {/* Birds Section */}
        {(!isSearchActive || filteredByType.birds.length > 0) && (
          <section className="cosmetics-section">
            <h2>🐦 Birds</h2>
            <p className="section-description">
              Companion birds that follow you on your adventures. These feathered friends add charm and mystique to your character while earning you talent points.
            </p>
            <div className="cosmetics-grid cosmetics-grid-small">
              {(isSearchActive ? filteredByType.birds : cosmeticsData.birds).map((bird, idx) => (
                <div key={idx} className="cosmetic-card-compact">
                  <h4>{bird.name}</h4>
                  <p className="obtained-from-compact">{bird.obtained}</p>
                </div>
              ))}
            </div>
            {isSearchActive && filteredByType.birds.length === 0 && (
              <p className="no-results">No birds match your search.</p>
            )}
          </section>
        )}

        {/* Closing Section */}
        <section className="cosmetics-section cosmetics-conclusion">
          <h2>Talent Points & Progression</h2>
          <p>
            Collecting cosmetics is not just about appearance—it's a strategic way to unlock talent points that strengthen your character. Each unique cosmetic you acquire contributes to your overall progression in the talents system. Mix and match different cosmetics to create your perfect character aesthetic while building a powerful collection.
          </p>
        </section>
      </div>
    </main>
  );
}
