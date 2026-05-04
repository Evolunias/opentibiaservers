'use client';

import { useState } from 'react';
import Link from 'next/link';
import './pvp.css';
import { Skull, Zap, Shield, Target, TrendingUp, Users } from 'lucide-react';

export default function PvPPage() {
  const [selectedSkull, setSelectedSkull] = useState(null);
  const [selectedTactic, setSelectedTactic] = useState(0);

  const skullSystem = [
    {
      id: 'no-skull',
      name: 'No Skull',
      color: '#f3ebdc',
      description: 'Innocent and protected. Your first transgression will mark you.',
      rules: [
        'Full protection in safe zones',
        'Cannot be attacked in protected areas',
        'Safe to hunt and gather resources',
        'Attacking others results in White Skull'
      ],
      consequence: 'Attack another player → White Skull'
    },
    {
      id: 'white-skull',
      name: 'White Skull',
      color: '#ffffff',
      description: 'You have spilled blood. The realm now sees you as a threat. But redemption awaits.',
      rules: [
        'Visible to all players in Open PvP worlds',
        'Cannot enter protected zones (1 min lockout)',
        'Other players may defend themselves against you',
        'Remains for 15 minutes from last offense',
        'Each new attack resets the timer'
      ],
      consequence: 'Multiple white skull offenses → Red Skull',
      danger: 'Moderate'
    },
    {
      id: 'red-skull',
      name: 'Red Skull',
      color: '#ff4444',
      description: 'Murderer. Unjustified killer. The realm hunts you. Your sins are unforgivable.',
      rules: [
        'Bright red marking visible to all',
        'Cannot enter protected zones',
        'Hunted by other players for bounty rewards',
        'Remains for 30 days from last unjustified kill',
        'Drop ALL items on death (no blessing protection)',
        'Reduced experience gain while skulled',
        'Cannot participate in guild wars safely'
      ],
      consequence: 'Continued killing → Black Skull',
      danger: 'Extreme'
    },
    {
      id: 'black-skull',
      name: 'Black Skull',
      color: '#1a1a1a',
      description: 'Outlaw. Mass murderer. The absolute worst criminal. Death should come quickly.',
      rules: [
        'Darkest mark—pure evil incarnate',
        'Cannot enter any safe zone',
        'Hunted relentlessly by bounty hunters',
        'Lasts 45 days from the last unjustified kill',
        'Drop ALL items on death',
        'Takes 100% damage in PvP (double normal)',
        'Respawn with only 40 HP and 0 mana',
        'Exiled from civilized society'
      ],
      consequence: 'Ultimate outlaw status',
      danger: 'Critical'
    }
  ];

  const pvpCombatTactics = [
    {
      id: 1,
      tactic: 'Positioning & Kiting',
      description: 'Master the art of maintaining distance while dealing damage. In PvP, positioning is everything.',
      fullDescription: 'Positioning and kiting is the foundation of all PvP success. This fundamental skill teaches you how to control your distance from opponents while dealing consistent damage. The goal is to stay at optimal range where you can attack safely while your enemy struggles to reach you. Great positioning separates novices from veterans.',
      strategies: [
        'Keep movement fluid and unpredictable',
        'Use terrain to your advantage (walls, obstacles)',
        'Maintain optimal range for your weapon type',
        'Predict enemy movement patterns',
        'Use speed bonuses to create space'
      ],
      advancedTips: [
        'Strafe in figure-eight patterns to make predicting your position difficult',
        'Use narrow corridors to prevent enemies from flanking you',
        'Save movement abilities for escape rather than chasing',
        'Abuse line-of-sight breaks when your opponent has ranged attacks'
      ],
      commonMistakes: [
        'Standing still while attacking—makes you an easy target',
        'Running in straight lines—predictable and easy to intercept',
        'Using all movement cooldowns at once—leaves you vulnerable',
        'Kiting toward your teammates—brings danger to them'
      ],
      skillLevel: 'Fundamental'
    },
    {
      id: 2,
      tactic: 'Crowd Control Mastery',
      description: 'Control the battlefield. Stuns, slows, and knockbacks win fights.',
      fullDescription: 'Crowd Control (CC) abilities are force multipliers in PvP. While position and damage are important, controlling your enemy\'s actions is paramount. Learning when to apply stuns, slows, knockbacks, and other CC effects can turn fights decisively in your favor. The warrior who controls the battlefield controls the outcome.',
      strategies: [
        'Chain CC abilities for maximum effect',
        'Time stuns to interrupt dangerous abilities',
        'Combo crowd control with team attacks',
        'Use environmental CC (terrain hazards)',
        'Coordinate CC timing with your squad'
      ],
      advancedTips: [
        'Stun enemies just before they cast their ultimate ability for maximum impact',
        'Layer multiple CC effects—slow + stun + knockback creates vulnerability windows',
        'Use CC to reposition enemies away from objectives or teammates',
        'Save one CC ability for emergency situations rather than using all at once'
      ],
      commonMistakes: [
        'Wasting CC on enemies with CC immunity active',
        'Using CC when the enemy team is grouped—gets overwritten',
        'Not communicating CC timing with team members',
        'Using CC offensively instead of defensively when outnumbered'
      ],
      skillLevel: 'Intermediate'
    },
    {
      id: 3,
      tactic: 'Resource Management',
      description: 'Manage your mana, stamina, and cooldowns. Running dry in battle is death.',
      fullDescription: 'In Evolisca, you have finite resources—mana regenerates slowly, stamina depletes with actions, and cooldowns lock your most powerful abilities. Proper resource management means you always have something in reserve while your enemy runs dry. Victory goes to those who can sustain longer.',
      strategies: [
        'Plan ability rotation for maximum efficiency',
        'Know which abilities to spam vs. conserve',
        'Track enemy mana/resource states',
        'Use pots and consumables strategically',
        'Never waste cooldowns on weak targets'
      ],
      advancedTips: [
        'Conserve your ultimate ability for when you\'re behind or against multiple enemies',
        'Use mana potions proactively before extended fights, not in desperation',
        'Rotate between high-mana abilities and low-mana abilities to maintain resource flow',
        'Watch your opponent\'s ability usage patterns to predict when they\'ll be defenseless'
      ],
      commonMistakes: [
        'Spamming high-mana abilities early in a fight—leaves you vulnerable late',
        'Using potions reactively when you\'re already critical—heal before the emergency',
        'Ignoring cooldown timers—don\'t commit to a fight without key abilities ready',
        'Wasting ultimate abilities on weak enemies or already-winning situations'
      ],
      skillLevel: 'Intermediate'
    },
    {
      id: 4,
      tactic: 'Reading Your Enemy',
      description: 'Combat is a mind game. Predict and counter enemy tactics before they execute them.',
      fullDescription: 'True mastery comes from understanding your opponent—their patterns, their habits, their fears, and their strengths. A player who reads their enemy can predict every move before it happens, dodge abilities that haven\'t been cast yet, and counter strategies before they unfold. This is the skill that separates good players from legendary ones.',
      strategies: [
        'Study enemy ability animations',
        'Predict dodge timing from patterns',
        'Identify their cooldown rotations',
        'Recognize class strengths and weaknesses',
        'Adjust tactics mid-fight based on performance'
      ],
      advancedTips: [
        'Every ability has a "tell"—a subtle animation that precedes its cast. Learn them all.',
        'Track cooldowns mentally—after you see an ability used, predict when it will be ready again',
        'Notice playstyle patterns: Does the enemy always cast ability X before Y? Use it against them.',
        'Test your opponent early with harmless probes to learn how they react and dodge'
      ],
      commonMistakes: [
        'Tunnel vision on your own rotation—forget to watch what your enemy is doing',
        'Assuming your opponent will always play the same way—adapt to changes',
        'Not respecting class matchups—some builds counter yours, adjust accordingly',
        'Ignoring successful enemy patterns just because you expected something different'
      ],
      skillLevel: 'Advanced'
    },
    {
      id: 5,
      tactic: 'Squad Coordination',
      description: 'In group PvP, synchronized action destroys individual skill. Fight as one.',
      fullDescription: 'Individual skill means nothing without team cohesion. In squad battles, communication, synchronized ability timing, and role clarity turn a group of good players into an unstoppable force. The best squads move like one organism—thinking collectively, striking simultaneously, and protecting each other flawlessly.',
      strategies: [
        'Assign clear roles (tank, DPS, healer)',
        'Execute coordinated burst damage windows',
        'Protect vulnerable teammates',
        'Call targets and coordinate abilities',
        'Maintain formation and cover each other'
      ],
      advancedTips: [
        'Establish hand signals or callouts before combat so communication is instant',
        'Sync burst damage windows—all DPS strike the same target simultaneously for maximum impact',
        'Position your tank between enemies and your healer at all times',
        'Rotate defensive cooldowns so someone is always protected—don\'t use all shields at once'
      ],
      commonMistakes: [
        'Attacking different targets—spread damage means no one dies, you lose',
        'Ignoring teammates who need help—one casualty cascades into total defeat',
        'Not communicating—silent squads are disorganized and vulnerable',
        'Using all defensive cooldowns at once instead of staggering them'
      ],
      skillLevel: 'Advanced'
    },
    {
      id: 6,
      tactic: 'Adaptation & Intelligence',
      description: 'The best warriors evolve. Learn, adapt, and counter your enemies.',
      fullDescription: 'The meta evolves, patches change balance, and new strategies emerge constantly. True masters never stop learning. They analyze defeats, study successful opponents, adapt their builds, and develop counter-strategies. Stagnation leads to irrelevance. Growth leads to legend.',
      strategies: [
        'Analyze opponent builds and stats',
        'Switch tactics when your strategy fails',
        'Learn from every death',
        'Develop counter-strategies for meta builds',
        'Stay informed about balance patches and updates'
      ],
      advancedTips: [
        'Keep multiple builds prepared—swap to counter enemy team composition before the fight',
        'Study the patch notes before the first fight—adapt your build immediately to balance changes',
        'Record your defeats and review them analytically—emotion clouds judgment, analysis reveals truth',
        'Network with top players—their strategies and insights are invaluable for your growth'
      ],
      commonMistakes: [
        'Refusing to change your build because "it always works"—the meta shifts, you must evolve',
        'Blaming your defeats on luck or balance instead of analyzing what you did wrong',
        'Ignoring patch notes and balance updates—you\'re playing a different game than everyone else',
        'Isolating yourself—don\'t learn from others, and you won\'t reach the top'
      ],
      skillLevel: 'Master'
    }
  ];

  const progressionPillars = [
    {
      pillar: 'Skill Mastery',
      icon: Zap,
      description: 'Raw combat ability. Master your class mechanics, optimize rotations, and execute perfectly under pressure. Your hands must know every button by instinct.',
      aspects: ['Perfect ability timing', 'Rotation optimization', 'Cooldown management', 'Instant reflexes']
    },
    {
      pillar: 'Strategic Intelligence',
      icon: Target,
      description: 'The thinking warrior. Understand matchups, predict enemy moves, and turn knowledge into victory. Intelligence beats raw strength.',
      aspects: ['Map awareness', 'Enemy prediction', 'Build counter-picking', 'Macro-level tactics']
    },
    {
      pillar: 'Equipment & Optimization',
      icon: Shield,
      description: 'Gear matters. Optimize your builds, understand stat priorities, and equip yourself for victory. Strength comes from preparation.',
      aspects: ['Optimal builds', 'Stat priority', 'Resistance stacking', 'Synergy maxing']
    },
    {
      pillar: 'Mental Resilience',
      icon: TrendingUp,
      description: 'The will to fight. Stay calm under pressure, learn from defeats, and maintain focus through grueling battles. Champion mentality wins wars.',
      aspects: ['Pressure handling', 'Defeat recovery', 'Focus maintenance', 'Emotional control']
    }
  ];

  const combatProgression = [
    {
      stage: 'Novice (Level 1000+)',
      challenge: 'Learn the basics',
      focus: 'Master basic abilities, understand your class, survive PvE encounters',
      pvpTip: 'Avoid open PvP—build skills in duels first'
    },
    {
      stage: 'Warrior (Level 2000+)',
      challenge: 'Refine technique',
      focus: 'Perfect rotations, understand matchups, start participating in guild wars',
      pvpTip: 'Begin small-scale PvP with experienced mentors'
    },
    {
      stage: 'Veteran (Level 3000+)',
      challenge: 'Dominate strategically',
      focus: 'Master multiple builds, lead small squads, optimize gear',
      pvpTip: 'Engage in organized guild warfare and raids'
    },
    {
      stage: 'Legend (Level 4500+)',
      challenge: 'Shape the meta',
      focus: 'Innovate tactics, mentor younger warriors, lead your faction',
      pvpTip: 'Command guild forces in territorial wars'
    }
  ];

  const avoidDeadSkull = [
    {
      rule: 'Only Attack When Justified',
      detail: 'Attack in self-defense or when provoked. Unprovoked attacks on innocent players are the path to damnation.'
    },
    {
      rule: 'Defend Territory, Not Kill',
      detail: 'In guild wars and territorial disputes, focus on winning battles—not racking up body counts of innocents.'
    },
    {
      rule: 'Join Guild Wars, Not Chaos',
      detail: 'Channel your aggression into organized guild warfare where combat is justified and honored.'
    },
    {
      rule: 'Respect Protection Zones',
      detail: 'Never attack players in protected areas. These safe havens exist for a reason.'
    },
    {
      rule: 'Know Your Prey',
      detail: 'If you hunt, hunt players of similar strength. Easy targets lead to dark skulls.'
    }
  ];

  return (
    <main className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      {/* Hero Section */}
      <section className="hero-grid">
        <div className="hero-copy panel hero-panel">
          <span className="eyebrow">Combat & Conquest</span>
          <h1>PvP System</h1>
          <p>
            In Evolisca, player versus player combat is not a side feature—it is the core of the experience.
            Every sword swing, every spell cast, every strategic decision in battle defines your legend.
            Master the skull system, dominate the combat arena, and carve your name into eternal glory.
          </p>
          <div className="hero-actions">
            <a href="https://evolisca.com" target="_blank" rel="noreferrer" className="button-primary">
              Enter Battle
            </a>
            <Link href="/guilds" className="button-secondary">
              Guild System
            </Link>
          </div>
        </div>

        <aside className="panel side-panel">
          <div className="panel-header">
            <span className="eyebrow">Quick Info</span>
            <h2>PvP Essentials</h2>
          </div>
          <div className="side-content">
            <div className="fact-item">
              <div className="fact-label">World Type</div>
              <div className="fact-value">Open PvP</div>
            </div>
            <div className="fact-item">
              <div className="fact-label">First Combat</div>
              <div className="fact-value">Protection Level 200</div>
            </div>
            <div className="fact-item">
              <div className="fact-label">Core Mechanic</div>
              <div className="fact-value">Skull System</div>
            </div>
            <div className="fact-item">
              <div className="fact-label">Key Stat</div>
              <div className="fact-value">Skill & Strategy</div>
            </div>
          </div>
        </aside>
      </section>

      {/* Skull System Section */}
      <section className="content-section">
        <div className="section-header">
          <h2>The Skull System</h2>
          <p>Every act of violence leaves a mark. The skull you bear tells your story—hero, murderer, or legend.</p>
        </div>
        
        <div className="skull-warning-banner panel">
          <Skull className="warning-icon" />
          <div className="warning-content">
            <h3>The Path of Skulls</h3>
            <p>
              In Open PvP worlds, your actions have consequences. Attack the wrong player, and you will be marked.
              Climb the skull ladder, and you become hunted. But for those seeking true PvP glory, the skull system
              is where legends are forged through blood and sacrifice.
            </p>
          </div>
        </div>

        <div className="skulls-grid">
          {skullSystem.map((skull, idx) => (
            <div
              key={skull.id}
              className={`skull-card panel ${selectedSkull === idx ? 'expanded' : ''}`}
              onClick={() => setSelectedSkull(selectedSkull === idx ? null : idx)}
            >
              <div className="skull-header">
                <div className="skull-badge" style={{ borderColor: skull.color }}>
                  <Skull size={24} style={{ color: skull.color }} />
                </div>
                <div className="skull-title">
                  <h3 style={{ color: skull.color }}>{skull.name}</h3>
                  <p className="skull-description">{skull.description}</p>
                </div>
              </div>

              {selectedSkull === idx && (
                <div className="skull-details">
                  <div className="skull-rules">
                    <div className="rules-label">Rules & Effects</div>
                    <ul className="rules-list">
                      {skull.rules.map((rule, i) => (
                        <li key={i}>
                          <span className="rule-dot"></span>
                          {rule}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {skull.danger && (
                    <div className="danger-indicator">
                      <span className="danger-label">Danger Level</span>
                      <span className={`danger-level ${skull.danger.toLowerCase()}`}>
                        {skull.danger}
                      </span>
                    </div>
                  )}
                  <div className="skull-progression">
                    <span className="progression-label">Next Stage</span>
                    <span className="progression-text">{skull.consequence}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Combat Tactics Section */}
      <section className="content-section">
        <div className="section-header">
          <h2>Master Combat Tactics</h2>
          <p>Victory belongs to the intelligent. Learn the strategies that separate champions from casualties.</p>
        </div>

        <div className="tactics-container">
          <div className="tactics-nav">
            {pvpCombatTactics.map((tactic, idx) => (
              <button
                key={tactic.id}
                className={`tactic-button ${selectedTactic === idx ? 'active' : ''}`}
                onClick={() => setSelectedTactic(idx)}
              >
                {tactic.tactic}
              </button>
            ))}
          </div>

          <div className="tactic-detail panel">
            <div className="tactic-header">
              <div>
                <h3>{pvpCombatTactics[selectedTactic].tactic}</h3>
                <p className="skill-level">
                  <span className={`level-badge ${pvpCombatTactics[selectedTactic].skillLevel.toLowerCase().replace(' ', '-')}`}>
                    {pvpCombatTactics[selectedTactic].skillLevel}
                  </span>
                </p>
              </div>
            </div>
            <p className="tactic-description">
              {pvpCombatTactics[selectedTactic].description}
            </p>

            <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid rgba(251, 191, 36, 0.2)' }}>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', marginBottom: '20px' }}>
                {pvpCombatTactics[selectedTactic].fullDescription}
              </p>
            </div>

            <div className="strategies-list">
              <h4>Key Strategies</h4>
              <ul>
                {pvpCombatTactics[selectedTactic].strategies.map((strategy, i) => (
                  <li key={i}>
                    <span className="strategy-icon">⚔</span>
                    {strategy}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid rgba(251, 191, 36, 0.2)' }}>
              <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--gold)', margin: '0 0 12px 0', fontWeight: '600' }}>Advanced Tips</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {pvpCombatTactics[selectedTactic].advancedTips.map((tip, i) => (
                  <li key={i} style={{ fontSize: '0.9rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'flex-start', gap: '10px', lineHeight: '1.5' }}>
                    <span style={{ color: 'var(--gold)', fontWeight: '700', flexShrink: 0 }}>✦</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid rgba(255, 68, 68, 0.2)' }}>
              <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#ff6b6b', margin: '0 0 12px 0', fontWeight: '600' }}>Common Mistakes to Avoid</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {pvpCombatTactics[selectedTactic].commonMistakes.map((mistake, i) => (
                  <li key={i} style={{ fontSize: '0.9rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'flex-start', gap: '10px', lineHeight: '1.5' }}>
                    <span style={{ color: '#ff6b6b', fontWeight: '700', flexShrink: 0 }}>✕</span>
                    {mistake}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Progression Pillars Section */}
      <section className="content-section">
        <div className="section-header">
          <h2>Pillars of PvP Mastery</h2>
          <p>True dominance requires excellence in all four pillars. Master one, and you are strong. Master all, and you become unstoppable.</p>
        </div>

        <div className="pillars-grid">
          {progressionPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="pillar-card panel">
                <div className="pillar-header">
                  <div className="pillar-icon">
                    <Icon className="icon" />
                  </div>
                  <h3>{pillar.pillar}</h3>
                </div>
                <p className="pillar-description">{pillar.description}</p>
                <div className="pillar-aspects">
                  <div className="aspects-label">Core Aspects</div>
                  <ul className="aspects-list">
                    {pillar.aspects.map((aspect, i) => (
                      <li key={i}>
                        <span className="aspect-dot">●</span> {aspect}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Combat Progression Section */}
      <section className="content-section">
        <div className="section-header">
          <h2>Your Journey to Legendary Status</h2>
          <p>Progression in Evolisca PvP is not instant. It is earned through blood, sweat, and relentless pursuit of mastery.</p>
        </div>

        <div className="progression-timeline">
          {combatProgression.map((stage, idx) => (
            <div key={idx} className="progression-step panel">
              <div className="step-marker">
                <div className="step-number">{idx + 1}</div>
                {idx < combatProgression.length - 1 && <div className="step-line" />}
              </div>
              <div className="step-content">
                <h3>{stage.stage}</h3>
                <div className="step-info">
                  <div className="info-item">
                    <span className="info-label">Challenge</span>
                    <span className="info-value">{stage.challenge}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Focus</span>
                    <span className="info-value">{stage.focus}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">PvP Tip</span>
                    <span className="info-value">{stage.pvpTip}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How to Avoid Red/Black Skull */}
      <section className="content-section">
        <div className="section-header">
          <h2>How to Avoid Red & Black Skulls</h2>
          <p>Becoming a murderer is easy. Staying off the dark path requires discipline and honor.</p>
        </div>

        <div className="rules-grid">
          {avoidDeadSkull.map((item, idx) => (
            <div key={idx} className="rule-card panel">
              <h3>{item.rule}</h3>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PvP Mindset Section */}
      <section className="content-section">
        <div className="mindset-panel panel">
          <div className="mindset-content">
            <h2>The Champion's Mindset</h2>
            <div className="mindset-list">
              <div className="mindset-item">
                <div className="mindset-title">Embrace Every Battle</div>
                <p>Every opponent teaches you something. Victory or defeat, learn and evolve.</p>
              </div>
              <div className="mindset-item">
                <div className="mindset-title">Respect Your Enemy</div>
                <p>A worthy opponent makes you stronger. Hunt those who challenge you, not the weak.</p>
              </div>
              <div className="mindset-item">
                <div className="mindset-title">Master Self Before Others</div>
                <p>Perfect your own mechanics before blaming imbalance or lag. Control what you can control.</p>
              </div>
              <div className="mindset-item">
                <div className="mindset-title">Never Stop Learning</div>
                <p>The meta evolves. Builds change. The instant you think you know everything, you become stagnant.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="content-section">
        <div className="cta-panel panel">
          <div className="cta-content">
            <h2>The Arena Awaits</h2>
            <p>
              In Evolisca, PvP is not optional. It is the test that separates the strong from the weak,
              the clever from the careless, the legendary from the forgotten. Every player is both hunter and hunted.
              Every battle shapes your destiny.
            </p>
            <div className="cta-actions">
              <a href="https://evolisca.com" target="_blank" rel="noreferrer" className="button-primary">
                Start Your PvP Journey
              </a>
              <Link href="/guilds" className="button-secondary">
                Join a Guild
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
