'use client';

export const dynamic = 'force-dynamic';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import './quests.css';

export default function QuestsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const questsData = [
    {
      id: 'first-promotion-quest',
      title: 'First Promotion Quest',
      levelRequirement: 100,
      difficulty: 'medium',
      difficultyLabel: 'Intermediate',
      duration: '60-90 minutes',
      partySize: 1,
      description: 'Embark on an epic journey from the tragic halls of Lady Menna to the legendary Captain Jack\'s secret trials. Navigate treacherous dungeons, solve ancient puzzles, and unlock the power of the Secret Cavern to earn your First Promotion Badge.',
      reward: 'First Promotion Badge',
      steps: [
        'Find Lady Menna at Orc Spawn',
        'Free her sister\'s soul at Skeleton Spawn',
        'Report back to Lady Menna',
        'Seek Captain Jack at the Temple',
        'Retrieve the Citizen Doll from Dragon Lord Spawn',
        'Test yourself at the Necromancer Statue',
        'Descend into the Secret Cavern',
        'Activate the sacred lights and claim the badge'
      ],
      highlights: [
        'Three epic chapters with unique challenges',
        'Solo adventure with deep storytelling',
        'First step on the path to legendary status',
        'Unlock access to greater quests and power'
      ]
    },
    {
      id: 'mirage-island-hakem-quest',
      title: 'Mirage Island - Hakem\'s Final Mission',
      levelRequirement: 600,
      difficulty: 'legendary',
      difficultyLabel: 'Legendary',
      duration: '30-45 minutes',
      partySize: 1,
      description: 'Venture to the mystical Mirage Island and seek out Hakem, the ancient guardian of forbidden knowledge. Accept his final mission to retrieve the sacred musical notes hidden beneath the island in ancient underground ruins. Navigate through elvish magic, activate mystical portals, and claim one of the greatest artifacts in all of Evolisca.',
      reward: 'Sacred Musical Notes',
      steps: [
        'Voyage to Mirage Island (Level 600+)',
        'Greet Hakem and accept the final mission',
        'Discover the bookshelf location in northeast ruins',
        'Interact with the ancient bookshelf portal',
        'Get teleported to the inner sanctum',
        'Locate and open the sacred chest',
        'Claim the sacred musical notes',
        'Return to Hakem for reward confirmation'
      ],
      highlights: [
        'Solo adventure reserved for elite adventurers',
        'Mystical portal activation and teleportation',
        'Sacred artifact reward with legendary power',
        'Earn the blessing of Hakem the Guardian'
      ]
    },
    {
      id: 'blackbeard-the-ruthless',
      title: 'Blackbeard The Ruthless',
      levelRequirement: 2500,
      difficulty: 'legendary',
      difficultyLabel: 'Extreme',
      duration: '120+ minutes',
      partySize: 3,
      description: 'Face the ultimate pirate lord in this extreme boss challenge. Travel to Pirate Island, obtain the Pirate Outfit, farm the rare Sabre from Stonecutter, and confront Blackbeard The Ruthless—a one-shot capable boss that demands perfect teamwork and positioning. Only for the most elite adventurers.',
      reward: 'Legendary Pirate Loot + Bragging Rights',
      steps: [
        'Journey to Pirate Island southeast entrance',
        'Obtain the Pirate Outfit requirement',
        'Unlock the outfit at the Temple',
        'Gather cluster of solace and gold nuggets',
        'Challenge Stonecutter for the Sabre (farm 100+ times)',
        'Navigate Behemoth Spawn to the boss room',
        'Defeat Stonecutter repeatedly for Sabre drop',
        'Face Blackbeard The Ruthless (spread out to avoid lethal spellcast)'
      ],
      highlights: [
        'Extreme difficulty with one-shot mechanics',
        'Requires full team coordination and spacing',
        'Brutal farming phase for Sabre (less than 1% drop rate)',
        'Solo-able only for level 2500+ with full equipment',
        'Team recommended with Knight/Crusader support',
        'Critical mechanic: SPREAD OUT (4 SQM kill zone)',
        'Reserve for elite, experienced player groups'
      ]
    },
    {
      id: 'second-promotion-quest',
      title: 'Second Promotion Quest',
      levelRequirement: 820,
      difficulty: 'hard',
      difficultyLabel: 'Elite',
      duration: '30-60 minutes',
      partySize: 5,
      description: 'Ascend to elite status through the Second Promotion Quest—a legendary challenge reserved for the mightiest warriors. Navigate through monster-infested chambers, face the dreaded Garacks, adapt to Wild Warriors, and match wits with ancient Grandpa Lords. Activate magical tiles, conquer every trial, and claim the promotional scroll that will forever elevate your vocational status.',
      reward: 'Promotional Scroll (Vocational Upgrade) + Spell Buff',
      steps: [
        'Enter the elite quest chamber (Level 820+ required)',
        'Navigate west and south to find the first magical tile',
        'Clear all monsters and step on the white tile',
        'Head west and descend the spiral stairs',
        'Explore the twin paths and gather magical activations',
        'Face the three southern trials with Garacks, Wild Warriors, and Grandpa Lords',
        'Map out the northern and eastern chambers',
        'Conquer the northern and eastern trials',
        'Activate the final magical tiles',
        'Cross the bridge to the reward chamber',
        'Claim your vocational upgrade and spell buff'
      ],
      highlights: [
        'Requires 5+ elite knights for optimal gameplay',
        'Face three unique enemy types with different strategies',
        'Multiple monster-filled chambers to conquer',
        'Magical tile activation puzzle elements',
        'Permanent vocational upgrade and spell buff rewards',
        'Access to greater elite quests upon completion'
      ]
    },
    {
      id: 'talent-reset-quest-level-860',
      title: 'Talent Reset Quest (Level 860+)',
      levelRequirement: 860,
      difficulty: 'legendary',
      difficultyLabel: 'Legendary',
      duration: '60-90 minutes',
      partySize: 5,
      description: 'A legendary journey into the depths of the Abyss Sanctum. Defeat the Elemental Dynamo, survive multiple Mystic Conductor battles, and conquer the Four Chambers of Trial to unlock Talent Page 3 and gain +240 HP / +240 Mana Rune Increase. (Recommended 1600+)',
      reward: 'Talent Page 3 + +240 HP / +240 Mana Rune Increase',
      steps: [
        'Gather your party at the Quest Chamber',
        'Descend and face Ghazbarans and Grandpa Lords',
        'Defeat the Elemental Dynamo boss',
        'Claim your first access point',
        'Retrieve the Western and Eastern chests',
        'Navigate to the Abyss Sanctum',
        'Battle multiple Mystic Conductor bosses',
        'Conquer the Four Chambers of Trial',
        'Claim your ultimate reward'
      ],
      highlights: [
        'Requires 5+ experienced players with full damage reduction builds',
        'Elemental Dynamo boss with pull mechanics',
        'Multiple Mystic Conductor battles',
        'Four Chambers of Trial with pillar system',
        'Unlock Talent Page 3 for ultimate talent mastery',
        'Permanent +240 HP and +240 Mana enhancement'
      ]
    },
    {
      id: 'nubien-legs-quest',
      title: 'Nubien Legs',
      levelRequirement: 1200,
      difficulty: 'hard',
      difficultyLabel: 'Hard',
      duration: '30-45 minutes',
      partySize: 2,
      description: 'Venture into the heart of the Annihilator\'s chamber where Fire Elementals rage with destructive fury. Master the chaos, harness your magic, and claim legendary leg armor from the depths of elemental fire.',
      reward: 'Nubien Legs',
      steps: [
        'Locate the quest entrance',
        'Speak with NPC Thornback',
        'Enter Elder Bonelords spawn',
        'Navigate to the teleport room',
        'Seek the Dwarven Statue',
        'Return to claim your reward',
        'Face the Annihilator\'s Fire Elementals',
        'Claim your legendary armor'
      ],
      highlights: [
        'Solo adventure requiring cunning and strategy',
        'Legendary leg armor reward',
        'Challenging Fire Elemental encounters',
        'Perfect for advancing warrior builds'
      ]
    },
    {
      id: 'avatar-quest',
      title: 'Avatar Quest',
      levelRequirement: 1000,
      difficulty: 'legendary',
      difficultyLabel: 'Legendary',
      duration: '90-120 minutes',
      partySize: 5,
      description: 'The ultimate ascension awaits. Reach Level 1000 and prove yourself worthy of godhood. Battle legendary creatures—Ghazbaran, Garacks, and Abyssal Shadowfiends. Navigate treacherous caves with one-way passages. Activate the Avatar statue. Climb deadly mountains. Face the untankable Avatar boss in an epic final battle. Gain permanent transformation ability and damage reduction.',
      reward: 'Avatar Transformation Ability + Permanent Damage Reduction',
      steps: [
        'Enter the Avatar Quest Chamber (Level 1000+ required)',
        'Battle through the legendary creatures on the first floor',
        'Navigate the treacherous caves carefully',
        'Discover and activate the Avatar statue in the northwest',
        'Activate the statue and unlock the northern passage',
        'Climb through deadly mountains filled with monsters',
        'Find the teleport portal to the final chambers',
        'Navigate the dark dungeon with surrounding mobs',
        'Face the ultimate Avatar boss in its lair',
        'Claim your Avatar transformation and permanent reward'
      ],
      highlights: [
        'Requires 5+ elite players for party coordination',
        'Face legendary creatures with unique mechanics',
        'Navigate one-way passages and deadly terrain',
        'Untankable boss requiring revolutionary tactics',
        'Avatar transformation ability reward',
        'Permanent damage reduction for all future combat',
        'Marked forever as one of Evolisca\'s legends'
      ]
    },
    {
      id: 'soul-weapon-quest',
      title: 'Soul Weapon Quest Guide',
      levelRequirement: 2500,
      difficulty: 'legendary',
      difficultyLabel: 'Legendary',
      duration: '45-60 minutes',
      partySize: 4,
      description: 'An epic quest involving multiple puzzles, boss fights, and complex mechanics to obtain a powerful soul weapon.',
      reward: 'Soul Weapon',
      steps: [
        'Fall into the small room',
        'Complete tile mechanism',
        'Water trees to summon boss',
        'Solve the mirror puzzle',
        're-summon the boss',
        'Complete sword puzzle',
        'Defeat clone copies',
        'Assemble final helmet'
      ],
      highlights: [
        'Requires 4-player party coordination',
        'Multiple puzzles and boss encounters',
        'Legendary weapon reward',
        'High skill requirement'
      ]
    },
    {
      id: 'lord-heskel-pirate-island',
      title: 'Lord Heskel - Pirate Island',
      levelRequirement: 1500,
      difficulty: 'legendary',
      difficultyLabel: 'Legendary',
      duration: '45-60 minutes',
      partySize: 5,
      description: 'Face Lord Heskel, the fearsome pirate captain of Pirate Island. This is a 5-player boss event requiring 1 golden token and 40 star coins per player for entry. Identify and activate cracked tiles to damage the boss while your team coordinates tank, healer, and damage dealer roles. Accessible every 2-3 hours per character for invaluable loot.',
      reward: 'Invaluable Pirate Loot (Accessible Every 2-3 Hours)',
      steps: [
        'Gather your 5-player crew with required entry items',
        'Each player must have 1 golden token and 40 star coins',
        'Find the boat south east of the Pirate Island teleport',
        'Pull the lever to enter the boss arena',
        'Identify all cracked tiles in the chamber',
        'Execute the battle strategy with tank holding aggro',
        'Healer maintains party health throughout combat',
        'Damage dealers activate cracked tiles and cast spells',
        'Use party buff spells for increased stats',
        'Defeat Lord Heskel and claim legendary rewards'
      ],
      highlights: [
        'Requires 5-player team coordination',
        'Entry cost: 1 golden token + 40 star coins per player',
        'Strategic tile activation mechanic',
        'Boss fight requiring perfect team execution',
        'Invaluable loot with no equal price',
        'Replayable every 2-3 hours per character',
        'Legendary difficulty for elite warriors'
      ]
    },
    {
      id: 'little-angel-wand-quest',
      title: 'Little Angel Wand',
      levelRequirement: 100,
      difficulty: 'medium',
      difficultyLabel: 'Intermediate',
      duration: '15-20 minutes',
      partySize: 1,
      description: 'Journey to the Diamond Servant spawn and seek out the mystical Little Angel Wand. Navigate to the bottom furthest floor and locate the glowing globe at the top right corner. This enchanted wand is a treasure for those brave enough to venture into the depths.',
      reward: 'Little Angel Wand',
      steps: [
        'Travel to the Diamond Servant spawn',
        'Descend to the bottom furthest floor of the spawn',
        'Look for the glowing globe icon at the top right corner',
        'Click the globe to interact with it',
        'Claim your Little Angel Wand reward'
      ],
      highlights: [
        'Solo adventure perfect for intermediate adventurers',
        'Simple navigation quest with clear objectives',
        'Mystical wand reward for magical enhancement',
        'Quick and rewarding quest completion'
      ]
    },
    {
      id: 'infinity-quest-level-2000',
      title: 'Infinity Quest Level 2000+',
      levelRequirement: 2000,
      difficulty: 'legendary',
      difficultyLabel: 'Extreme',
      duration: '90-150 minutes',
      partySize: 1,
      description: 'The ultimate test awaits. Pierce the invulnerability of the ancient Rathion boss using poison field magic, navigate treacherous chambers filled with orbs and levers, hunt rare Dreadviles for Spiky Clubs, summon and defeat the legendary Scarlok, and survive a devastating monster gauntlet. Claim a precious talent point and the legendary Infinity Exp item with unlimited charge and 10% bonus experience.',
      reward: 'Talent Point + Infinity Exp (Unlimited Charge, 10% Bonus XP)',
      steps: [
        'Prepare and enter the Infinity Quest (Level 2000+ required)',
        'Pierce Rathion\'s invulnerability with poison field magic',
        'Activate orbs and levers throughout the quest chambers',
        'Hunt Dreadviles and loot 1-2 Spiky Clubs',
        'Use Spiky Clubs on Gargoyle Statues to summon Scarlok',
        'Defeat Scarlok and earn a talent point',
        'Navigate the monster gauntlet to the reward room',
        'Claim the legendary Infinity Exp item',
        'Use Infinity Exp to gain 10% bonus experience on 4000+ monster kills'
      ],
      highlights: [
        'Extreme difficulty reserved for level 2000+ adventurers',
        'Face legendary bosses: Rathion and Scarlok',
        'Complex quest mechanics with orbs, levers, and summoning rituals',
        'Precious talent point reward for character growth',
        'Legendary Infinity Exp item with unlimited uses',
        'Constant 10% experience bonus accelerates leveling',
        'Survive overwhelming monster hordes with 8+ enemy coordination',
        'One of the most challenging quests in all of Evolisca'
      ]
    }
  ];

  const difficulties = {
    'easy': { label: 'Easy', icon: '⭐' },
    'medium': { label: 'Medium', icon: '⭐⭐' },
    'hard': { label: 'Hard', icon: '⭐⭐⭐' },
    'legendary': { label: 'Legendary', icon: '⭐⭐⭐⭐' }
  };

  // Filter quests
  const filteredQuests = useMemo(() => {
    return questsData.filter(quest => {
      const matchesSearch = 
        quest.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        quest.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        quest.reward.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesDifficulty = selectedDifficulty === 'all' || quest.difficulty === selectedDifficulty;
      
      return matchesSearch && matchesDifficulty;
    });
  }, [searchQuery, selectedDifficulty]);

  return (
    <main className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      {/* Hero Section */}
      <section className="hero-grid">
        <div className="hero-copy panel hero-panel">
          <span className="eyebrow">Epic Adventures</span>
          <h1>Quest Guide & Walkthroughs</h1>
          <p>
            Embark on epic quests across Evolisca. From your first legendary journey toward promotion to powerful weapon quests and challenging dungeon expeditions, find detailed guides and strategies to conquer every challenge and ascend to glory.
          </p>

          <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px', fontSize: '0.85rem' }}>
            <div>
              <strong style={{ color: 'var(--gold)', display: 'block', fontSize: '1.3rem' }}>1990+</strong>
              <span style={{ color: 'var(--text-muted)' }}>Total Quests</span>
            </div>
            <div>
              <strong style={{ color: 'var(--gold)', display: 'block', fontSize: '1.3rem' }}>Lvl 100+</strong>
              <span style={{ color: 'var(--text-muted)' }}>Min Level</span>
            </div>
            <div>
              <strong style={{ color: 'var(--gold)', display: 'block', fontSize: '1.3rem' }}>Solo & Party</strong>
              <span style={{ color: 'var(--text-muted)' }}>Modes</span>
            </div>
            <div>
              <strong style={{ color: 'var(--gold)', display: 'block', fontSize: '1.3rem' }}>Legendary</strong>
              <span style={{ color: 'var(--text-muted)' }}>Max Tier</span>
            </div>
          </div>
        </div>

        <aside className="panel side-panel">
          <div className="panel-header">
            <span className="eyebrow">Difficulty</span>
            <h2>Filter Quests</h2>
          </div>

          <div className="difficulty-filter-container">
            <button
              onClick={() => setSelectedDifficulty('all')}
              className={`difficulty-filter-btn active ${selectedDifficulty === 'all' ? 'active-all' : ''}`}
            >
              <span>🎯</span>
              <span>All Quests</span>
              <span className="difficulty-filter-count">
                {questsData.length}
              </span>
            </button>

            {Object.entries(difficulties).map(([key, diff]) => {
              const count = questsData.filter(q => q.difficulty === key).length;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedDifficulty(selectedDifficulty === key ? 'all' : key)}
                  className={`difficulty-filter-btn ${selectedDifficulty === key ? 'active' : ''}`}
                >
                  <span>{diff.icon}</span>
                  <span>{diff.label}</span>
                  <span className="difficulty-filter-count">
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </aside>
      </section>

      {/* Search Section */}
      <section className="content-section" style={{ marginBottom: '20px' }}>
        <div style={{ display: 'grid', gap: '12px' }}>
          <div>
            <label className="quests-search-label">
              Search Quests
            </label>
            <input
              type="text"
              placeholder="Search by quest name, reward, or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="quests-search-input"
            />
          </div>

          {/* Results Counter */}
          <div className="quests-results-info">
            {selectedDifficulty !== 'all' && (
              <span>
                Showing <strong>{difficulties[selectedDifficulty].label}</strong> quests •{' '}
              </span>
            )}
            Found {filteredQuests.length} of 1990+ quests
            {searchQuery && <span> (Search: "{searchQuery}")</span>}
          </div>
        </div>
      </section>

      {/* Quests Grid */}
      {filteredQuests.length > 0 ? (
        <section className="content-section">
          <div className="quests-grid">
            {filteredQuests.map((quest) => {
              return (
                <Link
                  key={quest.id}
                  href={`/quests/${quest.id}`}
                >
                  <div className="quest-card">
                    {/* Header */}
                    <div>
                      <div className="quest-card-header">
                        <h2 className="quest-card-title">
                          {quest.title}
                        </h2>
                        <span className="quest-card-badge">
                          {quest.difficultyLabel}
                        </span>
                      </div>

                      <p className="quest-card-description">
                        {quest.description}
                      </p>
                    </div>

                    {/* Quest Info Grid */}
                    <div className="quest-card-info">
                      <div className="quest-card-info-item">
                        <span className="quest-card-info-label">
                          Level
                        </span>
                        <div className="quest-card-info-value">
                          {quest.levelRequirement}+
                        </div>
                      </div>
                      <div className="quest-card-info-item">
                        <span className="quest-card-info-label">
                          Duration
                        </span>
                        <div className="quest-card-info-value">
                          {quest.duration}
                        </div>
                      </div>
                      <div className="quest-card-info-item">
                        <span className="quest-card-info-label">
                          Party Size
                        </span>
                        <div className="quest-card-info-value">
                          {quest.partySize} Players
                        </div>
                      </div>
                      <div className="quest-card-info-item">
                        <span className="quest-card-info-label">
                          Reward
                        </span>
                        <div className="quest-card-info-value">
                          {quest.reward}
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="quest-card-highlights">
                      {quest.highlights.map((highlight, idx) => (
                        <div key={idx} className="quest-highlight-item">
                          <span className="quest-highlight-check">✓</span>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="quest-card-cta">
                      View Full Walkthrough →
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      ) : (
        <section className="content-section">
          <div className="no-quests-state">
            <h3>No quests found</h3>
            <p>Try adjusting your search query or difficulty filter</p>
          </div>
        </section>
      )}
    </main>
  );
}
