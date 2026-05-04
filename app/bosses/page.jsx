'use client';

export const dynamic = 'force-dynamic';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import bossImagesData from '@/public/data/boss-images.json';
import bossLootData from '@/public/data/boss-loot.json';

const allBossImages = {
  'Infectanus': '/images/boss-raid-assets/boss-001.webp',
  'Ward Barbarian': '/images/boss-raid-assets/boss-002.webp',
  'Ethershreck': '/images/boss-raid-assets/boss-003.webp',
  'Dracola': '/images/boss-raid-assets/boss-004.webp',
  'Actors Power': '/images/boss-raid-assets/boss-005.webp',
  'Ancient Fungus': '/images/boss-raid-assets/boss-006.webp',
  'Death Mage': '/images/boss-raid-assets/boss-015.webp',
  'Emberflare': '/images/boss-raid-assets/boss-017.webp',
  'Ferumbras': '/images/boss-raid-assets/boss-018.webp',
  'Orshabaal': '/images/boss-raid-assets/boss-019.webp',
  'Dreadflame': '/images/boss-raid-assets/boss-020.webp',
  'Bazir': '/images/boss-raid-assets/boss-021.webp',
  'Glooth Bomb': '/images/boss-raid-assets/boss-014.webp',
  'Penguin Runner': '/images/boss-raid-assets/boss-022.webp',
  'Penguin Summoner': '/images/boss-raid-assets/boss-023.webp',
  'Eldritchbane': '/images/boss-raid-assets/boss-007.webp',
  'Frostbite': '/images/boss-raid-assets/boss-008.webp',
  'Blackbeard the Ruthless': '/images/boss-raid-assets/boss-010.webp',
  'Lord Heskel': '/images/boss-raid-assets/boss-024.webp',
  'Ise': '/images/boss-raid-assets/boss-009.webp',
  'Omrafir': '/images/boss-raid-assets/boss-025.webp',
  'Golden Champion': '/images/boss-raid-assets/boss-026.webp',
  'Gaz\'Haragoth': '/images/boss-raid-assets/boss-027.webp',
  'Ashee': '/images/boss-raid-assets/boss-028.webp',
  'Senkken': '/images/boss-raid-assets/boss-011.webp',
  'Arachnid Queen': '/images/boss-raid-assets/boss-029.webp',
  'Tyrn': '/images/boss-raid-assets/boss-030.webp',
  'Demon Visco': '/images/boss-raid-assets/boss-012.webp',
  'Cerberus': '/images/boss-raid-assets/boss-016.webp',
  'Ugly': '/images/boss-raid-assets/boss-031.webp',
  'DeathWing': '/images/boss-raid-assets/boss-032.webp',
  'Zushuka': '/images/boss-raid-assets/boss-033.webp',
  'Demontor': '/images/boss-raid-assets/boss-034.webp',
  'Shenlong Lord': '/images/boss-raid-assets/boss-013.webp',
  'Flamewrath': '/images/boss-raid-assets/boss-035.webp',
  'Savage King': '/images/boss-raid-assets/boss-036.webp',
  'Gorillion': '/images/boss-raid-assets/boss-037.webp',
  'Frostbite Leviathan': '/images/boss-raid-assets/boss-038.webp',
  'Arcanum': '/images/boss-raid-assets/boss-039.webp',
  'Sorcelight': '/images/boss-raid-assets/boss-040.webp',
  'Grimreaper': '/images/boss-raid-assets/boss-041.webp',
  'Jungle Core': '/images/boss-raid-assets/boss-042.webp',
  'The Guru': '/images/boss-raid-assets/boss-043.webp',
  'Xiarax': '/images/boss-raid-assets/boss-044.webp',
  'Zorah': '/images/boss-raid-assets/boss-045.webp',
  'Gaze of The Abyss': '/images/boss-raid-assets/boss-046.webp',
  'Skalon': '/images/boss-raid-assets/boss-047.webp',
  'Hunter of Zviath': '/images/boss-raid-assets/boss-048.webp',
  'Nyx': '/images/boss-raid-assets/boss-049.webp',
  'Chillax': '/images/boss-raid-assets/boss-050.webp',
  'Crystarax': '/images/boss-raid-assets/boss-051.webp',
  'Snowdrake': '/images/boss-raid-assets/boss-052.webp',
  'Gorvash': '/images/boss-raid-assets/boss-053.webp',
  'Lizard High Guard': '/images/boss-raid-assets/boss-054.webp',
  'Captain Jones': '/images/boss-raid-assets/boss-055.webp',
  'Zarabustor': '/images/boss-raid-assets/boss-056.webp',
};

const bossLootMap = bossLootData;

export default function BossesPage() {
  const [selectedBossType, setSelectedBossType] = useState('all');

  // Create a map of boss images for quick lookup
  const bossImagesMap = useMemo(() => {
    const map = {};
    bossImagesData.bosses.forEach(boss => {
      map[boss.name.toLowerCase()] = {
        sprite: boss.sprite,
        mapLocation: boss.mapLocation
      };
    });
    return map;
  }, []);

  const getBossImages = (bossName) => {
    return bossImagesMap[bossName.toLowerCase()] || null;
  };

  const getBossLoot = (bossName) => {
    return bossLootMap[bossName] || null;
  };

  const allBossesList = [
    { name: 'Actors Power' }, { name: 'Adventurer' }, { name: 'Alpha Ape' }, { name: 'Ancient Fungus' },
    { name: 'Apocalypse' }, { name: 'Arachnid Queen' }, { name: 'Arachnogar' }, { name: 'Arcane Energizer' },
    { name: 'Arcane Pulsator' }, { name: 'Arcanum', level: 'TBC', spawn_location: 'Located in Boogy Spawn (3k+)' }, { name: 'Ashee', level: '1500+', spawn_location: 'Located in either Mirage Island Elves -1, Roshamuul or Pirate Island Spawn' }, { name: 'Avatar' },
    { name: 'Azerus' }, { name: 'Bazir' }, { name: 'Blackbeard the Ruthless', level: '2000+', spawn_location: 'Located in Pirates area the way from Elves' }, { name: 'Blizzard' },
    { name: 'Blizzardbane' }, { name: 'Bloodback' }, { name: 'Brother Chill' }, { name: 'Captain Jones' },
    { name: 'Cataclysm Overlord' }, { name: 'Cerberus', level: 'TBC', spawn_location: 'Located in Nightmare Spawn, Mirage Island' }, { name: 'Chagorz' }, { name: 'Chillax' },
    { name: 'Cinnamon Ibex', level: '1500+', spawn_location: 'Located in Pirates (1200 Mirage Island), same place as Blackbeard. Might have multiple locations' }, { name: 'Crimson Tormentor' }, { name: 'Crystal Wolf' }, { name: 'Crystarax' },
    { name: 'Cult Enforcer' }, { name: 'Dead Lord' }, { name: 'Death Dragon' }, { name: 'Death Mage', level: '1000+', spawn_location: 'Located in Infernalists (north of left entrance to black knights on mirage island)' },
    { name: 'Deathstrike' }, { name: 'DeathWing' }, { name: 'Demodras' }, { name: 'Demon Visco', level: '2500+', spawn_location: 'Located in Mutated Visco Spawn (Need EK)' },
    { name: 'Demontor' }, { name: 'Desert Boss' }, { name: 'Despor' }, { name: 'Devil Man' },
    { name: 'Donkey' }, { name: 'Dracola' }, { name: 'Dreadflame' }, { name: 'Dreadlord Azazel' },
    { name: 'Dromedary' }, { name: 'Drume' }, { name: 'Dwarf Geomancer' }, { name: 'Easter Bunny' },
    { name: 'Ebon Tidecaller' }, { name: 'Eldritchbane' }, { name: 'Elemental Dynamo' }, { name: 'Elf Royal' },
    { name: 'Elite Akrabuut' }, { name: 'Emberflare' }, { name: 'Emerald Raven' }, { name: 'Ethershreck' },
    { name: 'Evil Man' }, { name: 'Fangmire' }, { name: 'Ferumbras' }, { name: 'Flamebound Fiend' },
    { name: 'Flamewrath' }, { name: 'Freegoiz' }, { name: 'Frostbite' }, { name: 'Frostbite Leviathan' },
    { name: 'Furyosa' }, { name: "Gaz'Haragoth" }, { name: 'Gaze of The Abyss' }, { name: 'Ghazbaran' },
    { name: 'Glaciel' }, { name: 'Gloomfire' }, { name: 'Glooth Bomb', level: '2000+', spawn_location: 'Located in 2nd Promotion Quest' }, { name: 'Golden Champion' },
    { name: 'Gorillion', level: 'TBC', spawn_location: 'Located in 3k Spawns' }, { name: 'Gorvash' }, { name: 'Grand Slime' }, { name: 'Grimreaper', level: 'TBC', spawn_location: 'Located in 4k+ area' },
    { name: 'Heartless' }, { name: 'Hellfire Warden' }, { name: 'Hellmane' }, { name: 'Horns of Doom' },
    { name: 'Hunter of Zviath' }, { name: 'Incendrax' }, { name: 'Infectanus' }, { name: 'Infernal Sovereign' },
    { name: 'Inferno Blob' }, { name: 'Insane Siren' }, { name: 'Ise' }, { name: 'Jungle Core' },
    { name: 'Kaltharion the Infinite' }, { name: 'King Kong' }, { name: 'Kingly Deer' }, { name: 'Krakoloss' },
    { name: 'Legendary Warrior' }, { name: 'Lich' }, { name: 'Lizard High Guard' }, { name: 'Lord Cryovenom' },
    { name: 'Lord Heskel' }, { name: 'Luminarach' }, { name: 'Magma Bubble' }, { name: 'Manta Ray' },
    { name: 'Massacre' }, { name: 'Meghanada' }, { name: 'Mitmah Vanguard' }, { name: 'Molten Dread' },
    { name: 'Morgaroth' }, { name: 'Murcion' }, { name: 'Mystic Conductor' }, { name: 'Mystiq' },
    { name: 'Nyx' }, { name: 'Omrafir' }, { name: 'Oozethorn' }, { name: 'Orcaruz' },
    { name: 'Ormathulak' }, { name: 'Orshabaal' }, { name: 'Paiz The Pauperizer' }, { name: 'Plagirath' },
    { name: 'Plant' }, { name: 'Primeval Chieftain' }, { name: 'Pyrelash' }, { name: 'Pyro Sludge' },
    { name: 'Quara Pincher Scout' }, { name: 'Ravion' }, { name: 'Rexxar' }, { name: 'Saga' },
    { name: 'Savage King', level: 'TBC', spawn_location: 'Located in Mercenary Spawn - Southeast corner' }, { name: 'Scarlok' }, { name: 'Senkken', level: '2200+', spawn_location: 'Located in Roshamoul (be sure that you finish Yassin NPC mission to get access)' }, { name: 'Shadow Priest' },
    { name: 'Shadow Shaman' }, { name: 'Shadowfang Alpha' }, { name: 'Shadowfin Overlord' }, { name: 'Shenlong Lord', level: '2500+', spawn_location: 'Located in Shenlong Spawn' },
    { name: 'Silent Fang' }, { name: 'Silver Dragon' }, { name: 'Skalon' }, { name: 'Snorlax' },
    { name: 'Snowdrake' }, { name: 'Sorcelight', level: 'TBC', spawn_location: 'Located in Rorc Spawn (3k+)' }, { name: 'Soulshatter Colossus' }, { name: 'Stonecracker' },
    { name: 'Strong Glooth Horror' }, { name: 'Talath' }, { name: 'The Evil Eye' }, { name: 'The Guru' },
    { name: 'The Many' }, { name: 'The Old Widow' }, { name: 'The Tangled Pit' }, { name: 'Toxarion' },
    { name: 'Toxic Coil' }, { name: 'Tyrn', level: '2200+', spawn_location: 'Located in Pirates (1200 Mirage Island)' }, { name: 'Ugly' }, { name: 'Varkolyn Leader' },
    { name: 'Velor' }, { name: 'Vemiath' }, { name: 'Venomclaw the Tyrant' }, { name: 'Verminor' },
    { name: 'Vile Serpent' }, { name: 'Virulash' }, { name: 'Void Catalyst' }, { name: 'Void Harbinger' },
    { name: 'War Horse' }, { name: 'Ward Barbarian' }, { name: 'Webcrystal' }, { name: 'Xiarax' },
    { name: 'Zarabustor' }, { name: 'Zorah' }, { name: 'Zushuka' }
  ];

  const bosses = {
    complete: {
      label: 'All Bosses (Complete List)',
      description: 'Complete list of all available bosses across Evolisca. Defeat each for first-time talent unlock.',
      requirements: 'Varies by boss',
      bosses: allBossesList.map(boss => ({
        ...boss,
        level: boss.level || 1500,
        exp: 20000,
        notes: 'Defeat for first-time talent unlock',
        spawn_location: boss.spawn_location
      }))
    },
    daily: {
      label: 'Daily Bosses',
      description: 'Available daily by purchasing charges with task points',
      requirements: 'Level 2000+ | 1 Charge = 30 Task Points',
      bosses: [
        { name: 'Ghazbaran', level: 1800, exp: 25000, loot: ['legendary armor', 'charms'], spawn_time: 'Every hour at different locations', notes: 'Increased charm drop rates' },
        { name: 'Golden Dragon', level: 1500, exp: 18000, loot: ['golden scale', 'treasure'], spawn_time: 'Every hour', notes: 'Fear duration 2.5s, reduced appearance' },
        { name: 'Dark Sorcerer', level: 1500, exp: 18000, loot: ['spell tome', 'dark rune'], spawn_time: 'Every hour', notes: 'Accessible for mid-high level players' },
        { name: 'Demon', level: 1400, exp: 16000, loot: ['demonic staff', 'soul'], spawn_time: 'Every hour', notes: 'Rewarding for level 1400+ players' },
      ]
    },
    weekly: {
      label: 'Weekly Bosses',
      description: 'Special weekend bosses requiring group coordination and preparation',
      requirements: 'Level 2500+ | 10 players minimum | Each player contributes: 1,000 Star Coins, 1,000 Gold Nuggets, 10 Gold Tokens',
      schedule: 'Friday, Saturday, Sunday (Once per day)',
      bosses: [
        { name: 'World Boss (Rotating)', level: 2000, exp: 50000, loot: ['high-end sets', 'mounts', 'legendary items'], group_req: '10 players', time_limit: '30 minutes', notes: 'Requires 10 minimum level 2500+ players' },
        { name: 'Raid Boss Alpha', level: 1900, exp: 45000, loot: ['raid armor', 'weapons'], group_req: '10+ players', time_limit: '30 minutes', set_bonus: 'Thorn Style +5% Critical Chance' },
        { name: 'Raid Boss Beta', level: 1950, exp: 48000, loot: ['raid equipment', 'enchants'], group_req: '10+ players', time_limit: '30 minutes', set_bonus: '+5% Critical Chance, +5% Damage' },
      ]
    },
    hourly: {
      label: 'Hourly Bosses',
      description: 'Public bosses that spawn every hour at various locations',
      bosses: [
        { name: 'Ward Barbarian', level: 1200, exp: 12000, loot: ['barbarian armor', 'axes'], spawn_time: 'Every hour', location: 'Ward Area', notes: 'Entry level fixed' },
        { name: 'Orc Champion', level: 1100, exp: 10000, loot: ['orc armor', 'weapons'], spawn_time: 'Every hour', location: 'Orc Fort', notes: 'Immunity fixed' },
        { name: 'Vexclaw Guardian', level: 1250, exp: 13000, loot: ['vexclaw armor', 'claw'], spawn_time: 'Every hour', location: 'Vexclaw Hunt' },
        { name: 'Metal Colossus', level: 1100, exp: 10500, loot: ['metal armor', 'stone weapons'], spawn_time: 'Every hour', location: 'Stone Ruins' },
      ]
    },
    legendary: {
      label: 'Legendary Bosses',
      description: 'End-game bosses with exceptional rewards and requirements',
      bosses: [
        { name: 'Infinity Ghazbaran', level: 3500, exp: 100000, loot: ['ultimate armor', 'cosmetics', 'mounts'], spawn_time: 'Random', requirements: 'Level 3500+', notes: 'Requires SC for level 4000+ players' },
        { name: 'Arcane Pulsator', level: 2500, exp: 60000, loot: ['void catalyst outfit', 'cosmetics'], spawn_time: 'On-demand', requirements: 'Complete Talent Reset Quest', notes: 'Power rivals Ise' },
        { name: 'Challenge Room Boss', level: 1500, exp: 40000, loot: ['challenge set', 'tokens'], spawn_time: 'Per run', requirements: 'Complete 7 waves in 15 minutes', notes: '+1 level per wave cleared' },
      ]
    }
  };

  const spawnParchment = {
    name: 'Spawn Parchment System',
    description: 'Create a private spawn with elite monsters for solo or small group hunting',
    requirements: 'Level 1000+',
    cooldown: '3 hours (reduced from 6 hours)',
    duration: '1 hour of private spawn access',
    rewards: [
      { name: 'Boss Encounter', reward: '20% chance for boss to appear' },
      { name: 'Void Catalyst', reward: 'Key loot from boss drops' },
      { name: 'Krakoloss Mount', reward: '10% chance to unlock exclusive mount' },
    ]
  };

  const challengeRoom = {
    name: 'Challenge Room (7-Wave System)',
    description: 'High-level dungeon-style boss gauntlet with progressive difficulty',
    requirements: 'Level 1500+ | 10x Monster Skull Tokens',
    structure: [
      { wave: '1-2', type: 'Monster Waves', reward: '+1 level' },
      { wave: '3', type: 'Boss Fight', reward: '+1 level' },
      { wave: '4-6', type: 'Monster Waves', reward: '+1 level per wave' },
      { wave: '7', type: 'Boss Fight', reward: '+1 level' },
    ],
    rewards: {
      completion: 'Challenge Room Set (+10% Critical Chance)',
      items: ['Bounce Monster Stone', 'crafting materials', 'cosmetics']
    },
    requirements_detail: {
      time_limit: '15 minutes to complete all 7 waves',
      cooldown: 'Once every 5 hours',
      token_source: 'Defeat Skull Monsters (50% drop chance per kill)'
    }
  };

  const bossTypes = Object.entries(bosses);
  const displayBosses = selectedBossType === 'all' 
    ? bossTypes 
    : bossTypes.filter(([key]) => key === selectedBossType);

  const getTierColor = (level) => {
    return 'var(--text)';
  };

  return (
    <main className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <section className="hero-grid">
        <div className="hero-copy panel hero-panel">
          <span className="eyebrow">Bosses</span>
          <h1>Boss Encounters & Loot</h1>
          <p>
            Master daily, weekly, and legendary bosses. Learn spawn mechanics, access requirements, and discover the best loot tables for your level range.
          </p>

          <div style={{ marginTop: '24px' }}>
            <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '8px' }}>
              Boss Type
            </label>
            <select
              value={selectedBossType}
              onChange={(e) => setSelectedBossType(e.target.value)}
              style={{
                padding: '12px 14px',
                borderRadius: '10px',
                border: '1px solid var(--line)',
                background: 'var(--bg-elevated)',
                color: 'var(--text)',
                width: '100%',
                cursor: 'pointer',
                fontSize: '0.95rem',
              }}
            >
              <option value="all">All Boss Types</option>
              <option value="complete">All Bosses (Complete List)</option>
              <option value="daily">Daily Bosses</option>
              <option value="weekly">Weekly Bosses</option>
              <option value="hourly">Hourly Bosses</option>
              <option value="legendary">Legendary Bosses</option>
            </select>
          </div>
        </div>

        <aside className="panel side-panel">
          <div className="panel-header">
            <span className="eyebrow">Progression Tips</span>
            <h2>Getting Started</h2>
          </div>

          <div style={{ display: 'grid', gap: '16px' }}>
            <div>
              <strong style={{ display: 'block', marginBottom: '6px' }}>Daily Bosses</strong>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0' }}>
                Purchase charges with task points (30 points = 1 charge). Available for level 2000+ players. Bosses spawn hourly.
              </p>
            </div>
            <div>
              <strong style={{ display: 'block', marginBottom: '6px' }}>Weekly Bosses</strong>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0' }}>
                Require 10+ players level 2500+. Best done as a guild. Schedule: Friday, Saturday, Sunday.
              </p>
            </div>
            <div>
              <strong style={{ display: 'block', marginBottom: '6px' }}>Public Spawns</strong>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0' }}>
                Hourly bosses available for all levels. Check the cooldown module in-game for spawn status.
              </p>
            </div>
          </div>
        </aside>
      </section>

      {/* Boss Categories */}
      <section className="content-section">
        {displayBosses.map(([typeKey, typeData]) => (
          <div key={typeKey} style={{ marginBottom: '40px' }}>
            <div className="section-heading compact">
              <div>
                <span className="eyebrow">{typeData.label}</span>
                <h2>{typeData.label}</h2>
                <p style={{ marginTop: '8px', color: 'var(--text-muted)' }}>
                  {typeData.description}
                </p>
                <p style={{ marginTop: '8px', fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: '500' }}>
                  {typeData.requirements || typeData.schedule}
                </p>
              </div>
            </div>

            <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))' }}>
              {typeData.bosses.map((boss) => (
                <article
                  key={boss.name}
                  className="panel"
                  style={{
                    padding: '20px',
                    borderRadius: '16px',
                    display: 'grid',
                    gap: '12px',
                  }}
                >
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    {allBossImages[boss.name] && (
                      <img
                        src={allBossImages[boss.name]}
                        alt={boss.name}
                        style={{
                          width: '80px',
                          height: '80px',
                          objectFit: 'cover',
                          borderRadius: '6px',
                          flexShrink: 0
                        }}
                      />
                    )}
                    <strong style={{ display: 'block', fontSize: '1.05rem' }}>{boss.name}</strong>
                  </div>

                  {(() => {
                    const images = getBossImages(boss.name);
                    return images && (images.sprite || images.mapLocation) ? (
                      <div style={{ display: 'grid', gridTemplateColumns: images.sprite && images.mapLocation ? '1fr 1fr' : '1fr', gap: '12px', padding: '12px 0', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
                        {images.sprite && (
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '500' }}>SPRITE</span>
                            <img
                              src={images.sprite}
                              alt={`${boss.name} sprite`}
                              style={{ width: '100%', height: 'auto', borderRadius: '6px', backgroundColor: 'rgba(0,0,0,0.3)' }}
                            />
                          </div>
                        )}
                        {images.mapLocation && (
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '500' }}>MAP LOCATION</span>
                            <img
                              src={images.mapLocation}
                              alt={`${boss.name} map location`}
                              style={{ width: '100%', height: 'auto', borderRadius: '6px', backgroundColor: 'rgba(0,0,0,0.3)' }}
                            />
                          </div>
                        )}
                      </div>
                    ) : null;
                  })()}

                  <div style={{ paddingTop: '12px', borderTop: '1px solid var(--line)' }}>
                    {(boss.level && boss.level !== 1500) && (
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '6px' }}>
                        <span style={{ color: 'var(--text-muted)' }}>Level</span>
                        <strong style={{ color: 'var(--gold)' }}>{boss.level}</strong>
                      </div>
                    )}

                    {boss.spawn_location && (
                      <div style={{ fontSize: '0.85rem', marginBottom: '6px' }}>
                        <span style={{ color: 'var(--text-muted)' }}>Spawn Location</span>
                        <p style={{ margin: '4px 0 0 0', color: 'var(--text)', fontSize: '0.8rem' }}>{boss.spawn_location}</p>
                      </div>
                    )}

                    {boss.spawn_time && (
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '6px' }}>
                        <span style={{ color: 'var(--text-muted)' }}>Spawn</span>
                        <strong style={{ color: 'var(--text)' }}>{boss.spawn_time}</strong>
                      </div>
                    )}

                    {boss.location && (
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '6px' }}>
                        <span style={{ color: 'var(--text-muted)' }}>Location</span>
                        <strong style={{ color: 'var(--text)' }}>{boss.location}</strong>
                      </div>
                    )}

                    {boss.group_req && (
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '6px' }}>
                        <span style={{ color: 'var(--text-muted)' }}>Group</span>
                        <strong style={{ color: 'var(--text)' }}>{boss.group_req}</strong>
                      </div>
                    )}

                    {boss.time_limit && (
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '6px' }}>
                        <span style={{ color: 'var(--text-muted)' }}>Time Limit</span>
                        <strong style={{ color: 'var(--text)' }}>{boss.time_limit}</strong>
                      </div>
                    )}

                    {boss.loot && (
                      <div style={{ marginTop: '8px' }}>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>Loot</span>
                        <ul style={{ margin: '0', paddingLeft: '16px', fontSize: '0.85rem', color: 'var(--text)' }}>
                          {boss.loot.map((item, i) => (
                            <li key={i} style={{ margin: '2px 0' }}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {(() => {
                      const loot = getBossLoot(boss.name);
                      return loot ? (
                        <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid rgba(100, 150, 255, 0.1)' }}>
                          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Loot Drops</span>
                          <div style={{ display: 'grid', gap: '6px' }}>
                            {loot.common && loot.common.length > 0 && (
                              <div style={{ fontSize: '0.8rem' }}>
                                <span style={{ color: 'var(--text-muted)', fontWeight: '600' }}>Common:</span>
                                <p style={{ margin: '2px 0 0 0', color: 'var(--text-muted)', fontSize: '0.75rem', lineHeight: '1.4' }}>
                                  {loot.common.join(', ')}
                                </p>
                              </div>
                            )}
                            {loot.uncommon && loot.uncommon.length > 0 && (
                              <div style={{ fontSize: '0.8rem' }}>
                                <span style={{ color: 'var(--text-muted)', fontWeight: '600' }}>Uncommon:</span>
                                <p style={{ margin: '2px 0 0 0', color: 'var(--text-muted)', fontSize: '0.75rem', lineHeight: '1.4' }}>
                                  {loot.uncommon.join(', ')}
                                </p>
                              </div>
                            )}
                            {loot.rare && loot.rare.length > 0 && (
                              <div style={{ fontSize: '0.8rem' }}>
                                <span style={{ color: 'var(--text-muted)', fontWeight: '600' }}>Rare:</span>
                                <p style={{ margin: '2px 0 0 0', color: 'var(--text-muted)', fontSize: '0.75rem', lineHeight: '1.4' }}>
                                  {loot.rare.join(', ')}
                                </p>
                              </div>
                            )}
                            {loot.legendary && loot.legendary.length > 0 && (
                              <div style={{ padding: '6px 8px', borderRadius: '4px', background: 'var(--bg-soft)', border: '1px solid var(--line)' }}>
                                <span style={{ color: 'var(--text)', fontWeight: '600', fontSize: '0.8rem' }}>Legendary:</span>
                                <p style={{ margin: '2px 0 0 0', color: 'var(--text)', fontSize: '0.75rem', lineHeight: '1.4' }}>
                                  {loot.legendary.join(', ')}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      ) : null;
                    })()}

                    {boss.notes && (
                      <div style={{ marginTop: '8px', padding: '8px', borderRadius: '6px', background: 'var(--bg-soft)', fontSize: '0.8rem', color: 'var(--text-muted)', border: '1px solid var(--line)' }}>
                        <strong style={{ color: 'var(--text)' }}>Note:</strong> {boss.notes}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Spawn Parchment System */}
      {selectedBossType === 'all' && (
        <section className="content-section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Special System</span>
              <h2>Spawn Parchment</h2>
            </div>
            <p>
              Create your own private hunting instance with enhanced monsters and exclusive boss encounters.
            </p>
          </div>

          <div className="panel focus-panel" style={{ padding: '24px' }}>
            <div>
              <h3 style={{ margin: '0 0 16px 0' }}>How It Works</h3>
              <div style={{ display: 'grid', gap: '12px' }}>
                <div>
                  <strong style={{ color: 'var(--text)' }}>Requirements</strong>
                  <p style={{ margin: '4px 0 0 0', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    Level 1000+ to use Spawn Parchment
                  </p>
                </div>
                <div>
                  <strong style={{ color: 'var(--text)' }}>Cooldown</strong>
                  <p style={{ margin: '4px 0 0 0', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    3 hours per use (recently reduced from 6 hours)
                  </p>
                </div>
                <div>
                  <strong style={{ color: 'var(--text)' }}>Duration</strong>
                  <p style={{ margin: '4px 0 0 0', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    1 hour of private spawn with elite monsters
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 style={{ margin: '0 0 16px 0' }}>Rewards</h3>
              <div style={{ display: 'grid', gap: '8px' }}>
                {spawnParchment.rewards.map((reward, i) => (
                  <div key={i} style={{ padding: '12px', borderRadius: '8px', background: 'var(--bg-soft)', border: '1px solid var(--line)' }}>
                    <strong style={{ color: 'var(--text)' }}>{reward.name}</strong>
                    <p style={{ margin: '4px 0 0 0', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      {reward.reward}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Challenge Room */}
      {selectedBossType === 'all' && (
        <section className="content-section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">High-Level Content</span>
              <h2>Challenge Room</h2>
            </div>
            <p>
              A 7-wave gauntlet of increasingly difficult monsters and bosses.
            </p>
          </div>

          <article className="panel" style={{ padding: '24px', marginBottom: '24px' }}>
            <h3 style={{ margin: '0 0 16px 0' }}>Requirements & Mechanics</h3>
            <div style={{ display: 'grid', gap: '12px', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
              <div>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Minimum Level</span>
                <strong style={{ display: 'block', color: 'var(--text)', marginTop: '4px' }}>1500</strong>
              </div>
              <div>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Token Cost</span>
                <strong style={{ display: 'block', color: 'var(--text)', marginTop: '4px' }}>10x Monster Skull Tokens</strong>
              </div>
              <div>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Time Limit</span>
                <strong style={{ display: 'block', color: 'var(--text)', marginTop: '4px' }}>15 minutes all 7 waves</strong>
              </div>
              <div>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Cooldown</span>
                <strong style={{ display: 'block', color: 'var(--text)', marginTop: '4px' }}>Once every 5 hours</strong>
              </div>
            </div>
          </article>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ margin: '0 0 12px 0' }}>Wave Structure</h3>
            <div style={{ display: 'grid', gap: '12px', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              {challengeRoom.structure.map((wave, i) => (
                <article key={i} className="panel" style={{ padding: '16px', borderRadius: '12px' }}>
                  <strong style={{ color: 'var(--text)' }}>Wave {wave.wave}: {wave.type}</strong>
                  <p style={{ margin: '8px 0 0 0', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    Reward: {wave.reward}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <article className="panel" style={{ padding: '20px', borderRadius: '14px', background: 'var(--bg-soft)', border: '1px solid var(--line)' }}>
            <strong style={{ color: 'var(--text)' }}>Completion Reward</strong>
            <p style={{ margin: '8px 0 0 0', fontSize: '0.9rem', color: 'var(--text)' }}>
              Challenge Room Set: <strong style={{ color: 'var(--text)' }}>+10% Critical Chance</strong>
            </p>
            <p style={{ margin: '6px 0 0 0', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Additional rewards: Bounce Monster Stone, crafting materials, cosmetics
            </p>
          </article>
        </section>
      )}
    </main>
  );
}
