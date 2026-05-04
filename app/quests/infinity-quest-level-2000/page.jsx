'use client';

export const dynamic = 'force-dynamic';

import { useState } from 'react';

export default function InfinityQuestLevel2000Page() {
  const [expandedSteps, setExpandedSteps] = useState({});

  const questSteps = [
    {
      id: 1,
      number: 1,
      title: 'Prepare Your Approach',
      location: 'Infinity Quest Entrance',
      description: 'Before entering the Infinity Quest, ensure you have the proper preparation. You will need to be at least level 2000 to survive the journey ahead. Gather your strongest gear and healing items, as this is one of the most challenging quests in Evolisca. The quest entrance guards will only allow the sufficiently prepared to enter.',
      images: [],
      tips: ['Be level 2000 or higher', 'Bring plenty of healing items', 'Equip your strongest gear', 'Consider bringing protective charms']
    },
    {
      id: 2,
      number: 2,
      title: 'Pierce the Rathion Invulnerability',
      location: 'Rathion Chamber',
      description: 'Your first major challenge is facing the Rathion boss, which is protected by an ancient invulnerability barrier. This barrier can only be broken by poison field magic. Cast a powerful poison field spell directly on Rathion to pierce through the magical protection. Once the barrier is shattered, the boss becomes vulnerable to your attacks. This is a critical test of your magical prowess.',
      images: [
        'https://cdn.builder.io/api/v1/image/assets%2F7f9e9406db4e4e3d90c6d6f623005239%2F5fb83b62c38841f48abf6f7e74f1f36f?format=webp&width=800&height=1200'
      ],
      tips: ['Use poison field spells on Rathion', 'Wait for the invulnerability to fade', 'The barrier shows visible cracks when damaged', 'Have backup healing ready for counterattacks']
    },
    {
      id: 3,
      number: 3,
      title: 'Navigate the Orb and Lever Mechanism',
      location: 'Interior Quest Chambers',
      description: 'Throughout the interior of the quest, you will discover a series of magical orbs and ancient levers. These control the barrier system that blocks your progress. Carefully navigate through the chambers, clicking each orb and lever in sequence to deactivate the barriers. The magical architecture responds to your touch, and each activation brings you closer to the heart of the quest. Take your time to locate all of them, as missing even one will seal your path forward.',
      images: [],
      tips: ['Explore methodically through each chamber', 'Listen for the magical resonance when you activate orbs', 'Track which levers you have pulled', 'Some barriers require multiple orb activations', 'Return to the entrance if you become lost']
    },
    {
      id: 4,
      number: 4,
      title: 'Hunt the Dreadviles for Spiky Clubs',
      location: 'Dreadvile Territory',
      description: 'Deep within the quest chambers, you will encounter the fearsome Dreadvile monsters. These creatures are uniquely found only within this quest and guard valuable loot. Engage the Dreadviles in combat and defeat them to collect Spiky Clubs from their corpses. You will need to loot 1-2 Spiky Clubs from these monsters. The clubs are rare drops, so be prepared to engage multiple Dreadviles. Each defeated Dreadvile brings you closer to summoning the ultimate challenge.',
      images: [],
      tips: ['Dreadviles only appear inside this quest', 'Defeat multiple Dreadviles to ensure you have enough clubs', 'Loot carefully after each victory', 'Save the Spiky Clubs in your inventory for the next phase', 'Use area attacks to manage multiple Dreadviles']
    },
    {
      id: 5,
      number: 5,
      title: 'Summon Scarlok with Gargoyle Statues',
      location: 'Ancient Statue Chamber',
      description: 'Your loot of Spiky Clubs becomes the key to an ancient summoning ritual. You will discover multiple Gargoyle Statues throughout the quest chamber. Approach each statue and use your Spiky Clubs on them. As you activate each statue, the ancient magic begins to stir. With each club used, the summoning ritual grows stronger, building toward an inevitable confrontation. When all statues are properly activated, the formidable boss Scarlok will materialize before you. Prepare yourself for the battle of your lifetime, for only by defeating Scarlok can you claim a precious talent point as your reward.',
      images: [
        'https://cdn.builder.io/api/v1/image/assets%2F7f9e9406db4e4e3d90c6d6f623005239%2F4d355f7321a74a62b213ebf56efe9d80?format=webp&width=800&height=1200'
      ],
      tips: ['Use one Spiky Club per Gargoyle Statue', 'Activate all statues to complete the summoning', 'Scarlok appears after the final statue activation', 'This is one of the toughest bosses you will face', 'Ensure you have full health before the final activation', 'The talent point reward is invaluable for your growth']
    },
    {
      id: 6,
      number: 6,
      title: 'Confront and Defeat Scarlok',
      location: 'Boss Arena',
      description: 'Scarlok stands before you in all its terrible glory. This is not a mere monster—this is a true test of your combat prowess. The boss fights with overwhelming aggression and possesses devastating attacks. You must dodge its powerful strikes while maintaining relentless offense. This battle will demand everything you have learned. Steel yourself, execute your best strategies, and do not falter. Victory here grants you a talent point, marking a major milestone in your progression as an adventurer.',
      images: [],
      tips: ['Scarlok has high damage output', 'Stay mobile and dodge heavy attacks', 'Use your strongest damaging spells and abilities', 'Healing is essential—do not let your health drop dangerously low', 'Patience and persistence will overcome this foe', 'The talent point is your ultimate reward']
    },
    {
      id: 7,
      number: 7,
      title: 'Navigate the Monster Gauntlet',
      location: 'Reward Room Corridor',
      description: 'After defeating Scarlok, your path to the reward room lies before you. However, standing between you and glory is a terrifying gauntlet of monsters. The corridor swarms with dangerous creatures, and you can easily become surrounded by 8 or more enemies at once. This is where strategy and preparation become absolutely critical. You have two viable options: either bring a powerful ally such as a Crusader or Elite Knight to help distribute the enemy aggression, or ensure you are at least level 2500 with a complete Soul Set equipped for maximum survival. The monsters here are relentless and coordinated. Do not underestimate them. Press forward methodically, managing your health carefully and using area-of-effect abilities to control the crowd.',
      images: [],
      tips: ['Bring a Crusader or Elite Knight companion for support', 'Or be level 2500+ with a full Soul Set', 'Use crowd control abilities to manage multiple enemies', 'Keep your health above 50% at all times', 'Do not get cornered—keep moving', 'The reward awaits on the other side of this trial']
    },
    {
      id: 8,
      number: 8,
      title: 'Claim the Infinity Exp Item',
      location: 'Reward Chamber',
      description: 'You have survived the gauntlet and reached the reward chamber. Here awaits the legendary Infinity Exp item—a tool of immense power for adventurers seeking rapid progression. This remarkable item possesses unlimited charge, meaning you can use it indefinitely without fear of depletion. The Infinity Exp item has a special property: when equipped, it grants you an additional 10% experience gain on all monster defeats. Combined with its capacity to help you slay 4000 monsters with its bonus, this item becomes an invaluable instrument for grinding and power-leveling.',
      images: [],
      tips: ['The Infinity Exp has unlimited charge', 'It grants 10% bonus experience for all kills', 'You can use it to defeat approximately 4000 monsters', 'Equip it during your grinding sessions', 'The bonus stacks with other experience increases', 'This item accelerates your path to higher levels significantly']
    },
    {
      id: 9,
      number: 9,
      title: 'Harness the Power of Infinity Exp',
      location: 'Any Grinding Location',
      description: 'With the Infinity Exp item in your possession, you now have a powerful tool for accelerating your progression. Use this item while hunting monsters to gain the 10% experience bonus. Over the course of defeating 4000 monsters with this bonus, you will accumulate an enormous amount of experience points. This sustained grinding session transforms your power level dramatically. Many adventurers have used this strategy to climb rapidly from level 2000 toward 3000 and beyond. The journey is long, but the rewards are substantial.',
      images: [],
      tips: ['Equip the Infinity Exp before starting grinding sessions', 'Hunt in areas appropriate for your level', 'The 10% bonus applies to every monster killed', 'Combine with high-efficiency monster spawning areas', 'Take breaks to avoid fatigue', '4000 monster kills with this bonus equals massive progression']
    },
    {
      id: 10,
      number: 10,
      title: 'Your Ascension Continues',
      location: 'The Path Forward',
      description: 'You have conquered the Infinity Quest Level 2000+. You possess a talent point from Scarlok, and you carry the legendary Infinity Exp item. These achievements mark you as a formidable force in Evolisca. The experience gained from this quest and the grinding that follows will push you ever closer to the highest levels of power. Continue to refine your skills, complete additional quests, and push your boundaries ever further. The legends of Evolisca are not made by those who settle—they are made by those who continually strive for greatness.',
      images: [],
      tips: ['Allocate your talent point strategically', 'Continue hunting with the Infinity Exp item', 'Seek out quests at your new power level', 'Share your victory with fellow adventurers', 'Prepare for even greater challenges ahead', 'Your legend is just beginning']
    }
  ];

  const toggleStep = (id) => {
    setExpandedSteps(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <main className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      {/* Hero Section */}
      <section className="hero-grid">
        <div className="hero-copy panel hero-panel">
          <span className="eyebrow">The Ultimate Challenge</span>
          <h1>Infinity Quest Level 2000+</h1>
          <p>
            Ascend to the pinnacle of achievement in this epic quest designed for the most powerful adventurers. Confront the invulnerable Rathion boss using poison field magic, navigate treacherous chambers filled with orbs and levers, hunt the rare Dreadviles, summon the legendary Scarlok, and survive a gauntlet of overwhelming monsters. The reward awaits: a precious talent point and the legendary Infinity Exp item with unlimited charge and 10% bonus experience. Only the strongest will emerge victorious.
          </p>

          <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px', fontSize: '0.85rem' }}>
            <div>
              <strong style={{ color: 'var(--gold)', display: 'block', fontSize: '1.3rem' }}>10</strong>
              <span style={{ color: 'var(--text-muted)' }}>Epic Steps</span>
            </div>
            <div>
              <strong style={{ color: 'var(--gold)', display: 'block', fontSize: '1.3rem' }}>2000+</strong>
              <span style={{ color: 'var(--text-muted)' }}>Minimum Level</span>
            </div>
            <div>
              <strong style={{ color: 'var(--gold)', display: 'block', fontSize: '1.3rem' }}>1</strong>
              <span style={{ color: 'var(--text-muted)' }}>Talent Point</span>
            </div>
            <div>
              <strong style={{ color: 'var(--gold)', display: 'block', fontSize: '1.3rem' }}>Extreme</strong>
              <span style={{ color: 'var(--text-muted)' }}>Difficulty</span>
            </div>
          </div>
        </div>

        <aside className="panel side-panel">
          <div className="panel-header">
            <span className="eyebrow">Quest Overview</span>
            <h2>Your Journey</h2>
          </div>

          <div style={{ display: 'grid', gap: '12px' }}>
            <div style={{ padding: '12px', borderRadius: '8px', background: 'var(--bg-elevated)', border: '1px solid var(--line)' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Phase 1</span>
              <div style={{ color: 'var(--text)', fontWeight: '700', fontSize: '1.2rem' }}>Rathion's Trial</div>
              <p style={{ margin: '4px 0 0 0', fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>Pierce invulnerability with poison magic (Steps 1-2)</p>
            </div>

            <div style={{ padding: '12px', borderRadius: '8px', background: 'var(--bg-elevated)', border: '1px solid var(--line)' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Phase 2</span>
              <div style={{ color: 'var(--text)', fontWeight: '700', fontSize: '1.2rem' }}>The Summoning Ritual</div>
              <p style={{ margin: '4px 0 0 0', fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>Activate chambers, hunt Dreadviles, summon Scarlok (Steps 3-6)</p>
            </div>

            <div style={{ padding: '12px', borderRadius: '8px', background: 'var(--bg-elevated)', border: '1px solid var(--line)' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Phase 3</span>
              <div style={{ color: 'var(--text)', fontWeight: '700', fontSize: '1.2rem' }}>The Final Gauntlet</div>
              <p style={{ margin: '4px 0 0 0', fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>Survive the monster corridor and claim the Infinity Exp (Steps 7-10)</p>
            </div>
          </div>
        </aside>
      </section>

      {/* Quest Steps Section */}
      <section className="content-section">
        <div style={{ display: 'grid', gap: '16px' }}>
          {questSteps.map((step) => {
            const isExpanded = expandedSteps[step.id];
            
            return (
              <div
                key={step.id}
                onClick={() => toggleStep(step.id)}
                style={{
                  padding: '20px',
                  borderRadius: '12px',
                  background: 'var(--bg-soft)',
                  border: '1px solid var(--line)',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--line-strong)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--line)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: '12px', marginBottom: '12px' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px' }}>
                      <span style={{ color: 'var(--gold)', fontSize: '1.5rem', fontWeight: '700', minWidth: '40px' }}>
                        {step.number.toString().padStart(2, '0')}
                      </span>
                      <div>
                        <h3 style={{ margin: 0, fontSize: '1.15rem', color: 'var(--gold)', fontWeight: '700' }}>
                          {step.title}
                        </h3>
                        <p style={{ margin: '2px 0 0 0', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                          📍 {step.location}
                        </p>
                      </div>
                    </div>
                    <p style={{ margin: '8px 0 0 0', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.4', marginLeft: '52px' }}>
                      {step.description}
                    </p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
                    <span style={{
                      padding: '4px 12px',
                      borderRadius: '6px',
                      background: 'var(--bg-elevated)',
                      border: '1px solid var(--line)',
                      color: 'var(--text)',
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      whiteSpace: 'nowrap'
                    }}>
                      Step {step.number}
                    </span>
                  </div>
                </div>

                {/* Expand Button */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', marginLeft: '52px' }}>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: '600' }}>
                    {isExpanded ? 'Hide Details' : 'View Guide'}
                  </span>
                  <span style={{ color: 'var(--gold)', fontSize: '1.2rem', fontWeight: '700' }}>
                    {isExpanded ? '−' : '+'}
                  </span>
                </div>

                {/* Expanded Content */}
                {isExpanded && (
                  <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--line)', display: 'grid', gap: '16px' }}>
                    {/* Image Display */}
                    {step.images && step.images.length > 0 && (
                      <div>
                        <h4 style={{ margin: '0 0 12px 0', color: 'var(--gold)', fontWeight: '700' }}>🎨 Visual Guide</h4>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
                          {step.images.map((image, idx) => (
                            <img
                              key={idx}
                              src={image}
                              alt={`${step.title} screenshot ${idx + 1}`}
                              style={{
                                width: '100%',
                                height: 'auto',
                                objectFit: 'contain',
                                borderRadius: '8px',
                                border: '1px solid var(--line)',
                                cursor: 'pointer',
                                transition: 'transform 0.3s',
                                maxWidth: '100%'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'scale(1.05)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tips */}
                    {step.tips && step.tips.length > 0 && (
                      <div>
                        <h4 style={{ margin: '0 0 8px 0', color: 'var(--text-muted)', fontWeight: '700' }}>💡 Adventurer's Tips</h4>
                        <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '0.9rem' }}>
                          {step.tips.map((tip, idx) => (
                            <li key={idx} style={{ marginBottom: '4px' }}>{tip}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Quest Completion Info */}
      <section className="content-section" style={{ marginTop: '40px', paddingTop: '40px', borderTop: '1px solid var(--line)' }}>
        <div style={{ padding: '24px', borderRadius: '12px', background: 'var(--bg-soft)', border: '1px solid var(--line)' }}>
          <h2 style={{ margin: '0 0 16px 0', fontSize: '1.3rem', color: 'var(--gold)' }}>
            ⚡ The Legend of Infinity Quest
          </h2>

          <div style={{ display: 'grid', gap: '16px' }}>
            <p style={{ margin: 0, color: 'var(--text)', lineHeight: '1.7' }}>
              The Infinity Quest Level 2000+ stands as one of the most challenging and rewarding endeavors in all of Evolisca. Across 10 critical steps, you will face your greatest trials yet. From piercing the invulnerability of the ancient Rathion to summoning and defeating the fearsome Scarlok, this quest demands everything you have cultivated as an adventurer. The reward—a precious talent point and the legendary Infinity Exp item—will accelerate your journey toward legendary status.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
              <div style={{ padding: '16px', borderRadius: '8px', background: 'var(--bg-elevated)', border: '1px solid var(--line)' }}>
                <strong style={{ color: 'var(--text)', display: 'block', marginBottom: '8px' }}>⚔️ Master Your Build</strong>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  This quest requires a perfectly optimized character. Ensure your gear is at the highest level, your spells are mastered, and your strategy is flawless.
                </p>
              </div>

              <div style={{ padding: '16px', borderRadius: '8px', background: 'var(--bg-elevated)', border: '1px solid var(--line)' }}>
                <strong style={{ color: 'var(--text)', display: 'block', marginBottom: '8px' }}>🎯 Preparation is Key</strong>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  Gather all necessary items, potions, and equipment before entering. The quest shows no mercy to the unprepared.
                </p>
              </div>

              <div style={{ padding: '16px', borderRadius: '8px', background: 'var(--bg-elevated)', border: '1px solid var(--line)' }}>
                <strong style={{ color: 'var(--text)', display: 'block', marginBottom: '8px' }}>✨ Perseverance Prevails</strong>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  You may fail. You may need multiple attempts. Every legendary adventurer has. Never give up—the quest rewards those who persist.
                </p>
              </div>

              <div style={{ padding: '16px', borderRadius: '8px', background: 'var(--bg-elevated)', border: '1px solid var(--line)' }}>
                <strong style={{ color: 'var(--text)', display: 'block', marginBottom: '8px' }}>🏆 The Ultimate Prize</strong>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  Upon completion, a talent point is added to your character sheet, and you gain the legendary Infinity Exp item with unlimited charge.
                </p>
              </div>
            </div>

            <div style={{ padding: '16px', borderRadius: '8px', background: 'var(--bg-elevated)', border: '1px solid var(--line)' }}>
              <strong style={{ color: 'var(--text)', display: 'block', marginBottom: '8px' }}>🌟 Infinity Exp: The Game Changer</strong>
              <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                The Infinity Exp item is a legendary reward that grants unlimited uses and provides a constant 10% bonus to all monster experience gained. With this tool in your arsenal, grinding to level 3000 and beyond becomes not just possible, but inevitable. Over 4000 monster defeats, the cumulative experience gain will transform your power level dramatically. This item has changed the trajectory of many adventurers' careers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
