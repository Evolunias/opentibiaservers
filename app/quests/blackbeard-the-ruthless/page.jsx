'use client';

export const dynamic = 'force-dynamic';

import { useState, useEffect } from 'react';

export default function BlackbeardTheRuthlessPage() {
  const [expandedSteps, setExpandedSteps] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [selectedImage]);

  const questSteps = [
    {
      id: 1,
      number: 1,
      title: 'Journey to Pirate Island',
      location: 'Pirate Island - Southeast Entrance',
      description: 'Travel to the notorious Pirate Island, a haven for the most ruthless corsairs and cutthroats in the realm. Located southeast of where you enter through the Elves territory, this cursed isle is home to the legendary Blackbeard The Ruthless—a boss of unfathomable power and cruelty.',
      details: 'Pirate Island stands shrouded in perpetual fog, its shores littered with the remnants of countless battles. The air reeks of salt, blood, and desperation. As you make your way southeast from the main entry point through Elves, you begin to feel the weight of menace growing heavier with each step. The very ground beneath your feet seems to pulse with hostile energy. This is no ordinary quest location—it is a trial reserved for those bold or foolish enough to challenge one of the game\'s most formidable bosses. Steel your nerves and prepare for what lies ahead.',
      images: [
        '/images/quests/blackbeard-the-ruthless/step-01-pirate-island-1.webp',
        '/images/quests/blackbeard-the-ruthless/step-01-pirate-island-2.webp',
        '/images/quests/blackbeard-the-ruthless/step-01-pirate-island-3.webp'
      ],
      tips: ['Navigate to the southeast section of Pirate Island', 'This region is heavily populated with pirate enemies', 'Come prepared for intense combat encounters']
    },
    {
      id: 2,
      number: 2,
      title: 'Obtain the Pirate Outfit',
      location: 'Pirate Island - Teleport Portal',
      description: 'Before you can gain access to Blackbeard The Ruthless, you must be wearing the Pirate Outfit. This legendary garb is not merely cosmetic—it is a magical requirement enforced by ancient protections that guard the boss chamber. Without it, the teleport portal will refuse you entry.',
      details: 'The Pirate Outfit is more than just a costume; it is a key woven from the very essence of piracy itself. Only those who wear this outfit can pass through the magical barrier that protects Blackbeard\'s lair. The outfit grants you the authority to approach the teleport portal that leads to his chamber. This is a non-negotiable requirement. If you attempt to enter without the proper attire, the ancient magic will simply deny your passage. Many have tried to bypass this safeguard, and all have failed.',
      images: [
        '/images/quests/blackbeard-the-ruthless/step-02-pirate-outfit.webp'
      ],
      tips: ['The Pirate Outfit is mandatory to access the boss', 'Without it, you cannot enter the teleport portal', 'Ensure you have it equipped before proceeding']
    },
    {
      id: 3,
      number: 3,
      title: 'Unlock the Pirate Outfit at the Temple',
      location: 'Temple of Outfits',
      description: 'If you do not yet have the Pirate Outfit unlocked, you must journey to the Temple and obtain it. This sacred place houses the means to acquire the attire you need. Use the search function to quickly locate the outfit among countless others.',
      details: 'The Temple of Outfits stands as a monument to self-expression and power. Within its halls, adventurers can find any outfit their heart desires—provided they have the means to unlock them. To find the Pirate Outfit quickly, access the search function and type "pirate." This will filter through the vast library of available outfits, making your search infinitely faster than scrolling through the entire catalogue. Once you locate the Pirate Outfit entry, you can begin the process of unlocking it. This investment in your appearance is an investment in your ability to challenge Blackbeard The Ruthless.',
      images: [
        '/images/quests/blackbeard-the-ruthless/step-03-temple-1.webp',
        '/images/quests/blackbeard-the-ruthless/step-03-temple-2.webp'
      ],
      tips: ['Head to the Temple of Outfits', 'Use the search function and type "pirate"', 'This quickly filters the outfit list', 'Unlock the Pirate Outfit to proceed']
    },
    {
      id: 4,
      number: 4,
      title: 'Gather the Required Items',
      location: 'Throughout Evolisca',
      description: 'To unlock and equip the Pirate Outfit, you will need three key items: the Pirate Outfit itself, a Cluster of Solace, and Gold Nuggets. Most of these are common enough to obtain through farming and normal gameplay.',
      details: 'The requirements for the Pirate Outfit are not trivial, but they are certainly attainable for any dedicated adventurer. Cluster of Solace drops from many bosses across the realm—farming any challenging boss encounter will yield these valuable reagents. Gold Nuggets are farmable through various means; if you\'re unfamiliar with the most efficient farming routes, we recommend reading the professional guides on "How to Make Money in Game." These guides detail the best strategies for accumulating wealth quickly. With patience and persistence, you will gather everything needed. Remember: the struggle to obtain the outfit is merely a prelude to the greater struggle that awaits against Blackbeard himself.',
      images: [
        '/images/quests/blackbeard-the-ruthless/step-04-gather-items.webp'
      ],
      tips: ['Cluster of Solace drops from most bosses', 'Gold Nuggets can be farmed efficiently', 'Read the professional money-making guides', 'These items are farmable, though time-consuming']
    },
    {
      id: 5,
      number: 5,
      title: 'Challenge Stonecutter for the Sabre',
      location: 'Behemoth Spawn',
      description: 'Obtaining the Sabre is where your true trial begins. This is no common item—it is a rare and coveted weapon, and the challenge of acquiring it tests even the most skilled adventurers. To gain access to the Stonecutter boss, use the !taskboss command to open the Task Boss window.',
      details: 'The Stonecutter dwells in the Behemoth spawn, a region where only the mightiest beasts roam. By typing !taskboss into the game chat, you will open a specialized window that grants you access to the Task Boss system. This window will allow you to select and challenge Stonecutter directly. The Stonecutter is a formidable opponent, and defeating him offers a chance at the Sabre—but only a chance. The loot drop rate is incredibly low, less than 1%, making this an exercise in determination and persistence. Many adventurers have fought Stonecutter dozens of times without success. Are you prepared for such a grueling ordeal?',
      images: [
        '/images/quests/blackbeard-the-ruthless/step-05-stonecutter-1.webp',
        '/images/quests/blackbeard-the-ruthless/step-05-stonecutter-2.webp'
      ],
      tips: ['Use !taskboss command to open the Task Boss window', 'Use !taskboss command to gain attempts against Stonecutter', 'Select Stonecutter from the available bosses', 'The Sabre drop rate is less than 1%', 'Prepare for a long grind']
    },
    {
      id: 6,
      number: 6,
      title: 'Navigate Behemoth Spawn to the Boss Room',
      location: 'Behemoth Spawn - Deep Caverns',
      description: 'Once you have entered Behemoth Spawn, your task is to locate and descend into the Stonecutter\'s lair. Find the hole located south of the teleport portal entrance and prepare to descend multiple floors into the depths of the cavern system.',
      details: 'Behemoth Spawn is a labyrinth of tunnels and chambers, each one more dangerous than the last. Upon arrival via teleport, orient yourself toward the south. There you will find the crucial hole that leads downward. This is not a casual descent—you must be prepared to face the horrors that dwell in each successive level. As you move deeper underground, the air grows colder, the darkness more oppressive, and the sense of dread more overwhelming. Multiple floors separate you from the boss chamber where Stonecutter awaits. Each level is a gauntlet of challenges. Only the most determined will make it through to face the Stonecutter himself.',
      images: [
        '/images/quests/blackbeard-the-ruthless/step-06-behemoth-spawn.webp'
      ],
      tips: ['Find the hole south of the teleport entrance', 'Descend multiple floors', 'Prepare for encounters on each level', 'The boss room awaits at the deepest point']
    },
    {
      id: 7,
      number: 7,
      title: 'Defeat Stonecutter Repeatedly',
      location: 'Stonecutter\'s Chamber',
      description: 'You now face the grind that separates the legendary from the forgotten. The Stonecutter must be defeated potentially a hundred times or more to secure the Sabre. The loot drop rate is brutal—less than 1%—making this one of the most demanding challenges in the game.',
      details: 'Prepare yourself mentally: you may need to battle Stonecutter one hundred times or more to obtain a single Sabre. This is not hyperbole—it is statistical reality. The drop rate is unforgiving, testing your resolve in ways few challenges can match. However, there are strategies to mitigate this nightmare. First, use multiple characters to spread your attempts across different accounts while loot rates are boosted during special events. Second, bring a Loot Potion to increase your chances during critical attempts. Third, complete daily and weekly tasks to accumulate Boss Task Points. These points directly increase the number of attempts you can make against Stonecutter each day—more attempts mean faster acquisition of the Sabre. While this is undoubtedly a grueling ordeal, the reward is worth the effort. Few treasures in the game are as hard-earned as the Sabre.',
      images: [
        '/images/quests/blackbeard-the-ruthless/step-06-blackbeard-location.webp'
      ],
      tips: ['You may need to defeat Stonecutter 100+ times', 'Drop rate is less than 1%', 'Use multiple characters to increase attempts', 'Bring Loot Potions for boosted rates', 'Complete tasks to increase daily attempt limits', 'Be persistent—this is the price of power']
    },
    {
      id: 8,
      number: 8,
      title: 'Face Blackbeard The Ruthless',
      location: 'Pirate Island - Blackbeard\'s Chamber',
      description: 'You have finally obtained the Pirate Outfit and the Sabre. Now comes the ultimate challenge: confronting Blackbeard The Ruthless himself. Use the waypoint system to teleport instantly back to Pirate Island, equip your newfound power, and prepare for the encounter that separates champions from pretenders.',
      details: 'Blackbeard The Ruthless is a solo-able boss—but only if you possess exceptional skill and equipment. Seasoned veterans report that teleport hopping (entering, attacking, then teleporting out to heal) is a viable strategy for solo players. However, make no mistake: a single mistake can be fatal. Unless you possess level 2500+ with full legendary equipment, you stand a significant chance of being killed in one hit. Your best chance for victory is to bring a team. Coordinate with guild members or trusted allies. Blackbeard changes targets unpredictably and frequently, making teamwork essential. Your ideal composition includes a Knight or Crusader capable of using "exeta res" to provide healing and support while tanking damage. These classes can stabilize encounters that would otherwise spiral into chaos.\n\n⚠️ CRITICAL WARNING: Blackbeard possesses a devastating spellcast that will automatically kill any characters within 4 SQM (squares) of each other. This is not a suggestion—it is a deadly mechanic that has ended countless runs. Your team MUST SPREAD OUT at all times. Maintain maximum distance from allies. Coordinate positioning constantly. A moment\'s carelessness will wipe your entire team. Respect this mechanic, or pay the ultimate price. With discipline, preparation, and teamwork, you can emerge victorious and claim the title of legendary champion. Will you answer the call?',
      images: [
        '/images/quests/blackbeard-the-ruthless/step-08-blackbeard-1.webp',
        '/images/quests/blackbeard-the-ruthless/step-08-blackbeard-2.webp'
      ],
      tips: ['Blackbeard The Ruthless is the ultimate challenge', 'Solo strategy: teleport hopping for advanced players', 'Recommended: level 2500+ with full equipment for solo', 'Bring a team for optimal chances', 'Include a Knight or Crusader for healing/support', '⚠️ CRITICAL: SPREAD OUT - boss spell kills within 4 SQM', 'Maintain maximum distance from teammates at all times', 'Coordinate positioning continuously', 'Do not group up or you will all die']
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
          <span className="eyebrow">The Ultimate Boss Challenge</span>
          <h1>Blackbeard The Ruthless</h1>
          <p>
            The most feared pirate to ever sail the cursed seas of Evolisca awaits in his island fortress. Blackbeard The Ruthless is a boss of unparalleled savagery, commanding power that has crushed countless would-be challengers. Located in the depths of Pirate Island, this encounter demands more than mere combat prowess—it requires preparation, strategy, and nerves of steel. First, you must obtain the Pirate Outfit, a magical requirement to even approach his lair. Then, you must face the grueling trial of obtaining the Sabre by defeating Stonecutter dozens of times over. Only after proving yourself worthy through these ordeals can you face the legend himself. Blackbeard is solo-able for the extraordinarily skilled and equipped, but most adventurers will need a coordinated team to survive. His spellcasts are devastating, requiring perfect positioning and spread formation from your entire party. Are you brave enough to challenge one of the game's most infamous bosses?
          </p>

          <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px', fontSize: '0.85rem' }}>
            <div>
              <strong style={{ color: 'var(--gold)', display: 'block', fontSize: '1.3rem' }}>8</strong>
              <span style={{ color: 'var(--text-muted)' }}>Quest Steps</span>
            </div>
            <div>
              <strong style={{ color: 'var(--gold)', display: 'block', fontSize: '1.3rem' }}>Extreme</strong>
              <span style={{ color: 'var(--text-muted)' }}>Difficulty</span>
            </div>
            <div>
              <strong style={{ color: 'var(--gold)', display: 'block', fontSize: '1.3rem' }}>Team</strong>
              <span style={{ color: 'var(--text-muted)' }}>Recommended</span>
            </div>
            <div>
              <strong style={{ color: 'var(--gold)', display: 'block', fontSize: '1.3rem' }}>Legendary</strong>
              <span style={{ color: 'var(--text-muted)' }}>Reward</span>
            </div>
          </div>
        </div>

        <aside className="panel side-panel">
          <div className="panel-header">
            <span className="eyebrow">Boss Overview</span>
            <h2>Your Challenge</h2>
          </div>

          <div style={{ display: 'grid', gap: '12px' }}>
            <div style={{ padding: '12px', borderRadius: '8px', background: 'rgba(255, 69, 0, 0.1)', border: '1px solid rgba(255, 69, 0, 0.3)' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Boss Type</span>
              <div style={{ color: 'var(--gold)', fontWeight: '700', fontSize: '1.2rem' }}>Pirate Lord</div>
              <p style={{ margin: '4px 0 0 0', fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>One-shot capable boss</p>
            </div>

            <div style={{ padding: '12px', borderRadius: '8px', background: 'rgba(255, 215, 0, 0.1)', border: '1px solid rgba(255, 215, 0, 0.3)' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Phase 1</span>
              <div style={{ color: 'var(--gold)', fontWeight: '700', fontSize: '1.2rem' }}>Preparation</div>
              <p style={{ margin: '4px 0 0 0', fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>Obtain outfit & items</p>
            </div>

            <div style={{ padding: '12px', borderRadius: '8px', background: 'rgba(139, 69, 19, 0.1)', border: '1px solid rgba(139, 69, 19, 0.3)' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Phase 2</span>
              <div style={{ color: 'var(--gold)', fontWeight: '700', fontSize: '1.2rem' }}>The Grind</div>
              <p style={{ margin: '4px 0 0 0', fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>Farm sabre from Stonecutter</p>
            </div>

            <div style={{ padding: '12px', borderRadius: '8px', background: 'rgba(139, 0, 0, 0.1)', border: '1px solid rgba(139, 0, 0, 0.3)' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Phase 3</span>
              <div style={{ color: 'var(--gold)', fontWeight: '700', fontSize: '1.2rem' }}>The Final Battle</div>
              <p style={{ margin: '4px 0 0 0', fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>Face Blackbeard himself</p>
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
                  background: 'linear-gradient(135deg, rgba(139, 0, 0, 0.15) 0%, rgba(255, 215, 0, 0.08) 100%)',
                  border: '1px solid rgba(255, 69, 0, 0.3)',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--gold)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 69, 0, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 69, 0, 0.3)';
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
                      background: 'rgba(255, 69, 0, 0.2)',
                      border: '1px solid rgba(255, 69, 0, 0.4)',
                      color: 'var(--gold)',
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
                    {isExpanded ? 'Hide Details' : 'Explore Details'}
                  </span>
                  <span style={{ color: 'var(--gold)', fontSize: '1.2rem', fontWeight: '700' }}>
                    {isExpanded ? '−' : '+'}
                  </span>
                </div>

                {/* Expanded Content */}
                {isExpanded && (
                  <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(255, 69, 0, 0.2)', display: 'grid', gap: '16px' }}>
                    {/* Detailed Description */}
                    <div>
                      <h4 style={{ margin: '0 0 8px 0', color: 'var(--gold)', fontWeight: '700' }}>📖 The Full Story</h4>
                      <p style={{ margin: 0, color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '0.9rem', whiteSpace: 'pre-wrap' }}>
                        {step.details}
                      </p>
                    </div>

                    {/* Image Gallery */}
                    {step.images && step.images.length > 0 && (
                      <div>
                        <h4 style={{ margin: '0 0 12px 0', color: 'var(--gold)', fontWeight: '700' }}>🎨 Visual Guide</h4>
                        {(() => {
                          // Smart layout: 1 image = 1 column, 2 images = 1 column (separate rows), 3+ = 3 columns
                          const imageCount = step.images.length;
                          let columns = 1;
                          let maxHeight = '400px';

                          if (imageCount === 2) {
                            columns = 1;
                            maxHeight = '400px';
                          } else if (imageCount >= 3) {
                            columns = 3;
                            maxHeight = '350px';
                          }

                          return (
                            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: '12px' }}>
                              {step.images.map((image, idx) => (
                                <img
                                  key={idx}
                                  src={image}
                                  alt={`${step.title} screenshot ${idx + 1}`}
                                  onClick={() => setSelectedImage(image)}
                                  style={{
                                    width: '100%',
                                    height: 'auto',
                                    maxHeight: maxHeight,
                                    objectFit: 'cover',
                                    borderRadius: '8px',
                                    border: '1px solid rgba(255, 69, 0, 0.3)',
                                    cursor: 'pointer',
                                    transition: 'transform 0.3s'
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
                          );
                        })()}
                      </div>
                    )}

                    {/* Tips */}
                    {step.tips && step.tips.length > 0 && (
                      <div>
                        <h4 style={{ margin: '0 0 8px 0', color: '#FF6347', fontWeight: '700' }}>⚡ Battle Tips</h4>
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
        <div style={{ padding: '24px', borderRadius: '12px', background: 'linear-gradient(135deg, rgba(139, 0, 0, 0.2) 0%, rgba(255, 215, 0, 0.08) 100%)', border: '1px solid rgba(255, 69, 0, 0.4)' }}>
          <h2 style={{ margin: '0 0 16px 0', fontSize: '1.3rem', color: 'var(--gold)' }}>
            ⚔️ The Challenge Awaits
          </h2>

          <div style={{ display: 'grid', gap: '16px' }}>
            <p style={{ margin: 0, color: 'var(--text)', lineHeight: '1.7' }}>
              Blackbeard The Ruthless stands as a towering testament to what awaits those bold enough to chase glory at any cost. This is not a quest for the faint of heart—it is a trial by fire that demands everything you have to offer. From the initial preparation phase where you acquire the necessary outfit and items, through the brutal grind of farming the Sabre from Stonecutter, to the final confrontation with the pirate lord himself, every step tests your dedication and skill.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
              <div style={{ padding: '16px', borderRadius: '8px', background: 'rgba(255, 69, 0, 0.1)', border: '1px solid rgba(255, 69, 0, 0.2)' }}>
                <strong style={{ color: 'var(--gold)', display: 'block', marginBottom: '8px' }}>💀 Extreme Difficulty</strong>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  One wrong move, one moment of carelessness, and you will be erased from existence. This boss respects no player.
                </p>
              </div>

              <div style={{ padding: '16px', borderRadius: '8px', background: 'rgba(255, 69, 0, 0.1)', border: '1px solid rgba(255, 69, 0, 0.2)' }}>
                <strong style={{ color: 'var(--gold)', display: 'block', marginBottom: '8px' }}>⛓️ Prepare for the Grind</strong>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  The path to Blackbeard requires patience. Farming the Sabre is a test of your commitment and perseverance.
                </p>
              </div>

              <div style={{ padding: '16px', borderRadius: '8px', background: 'rgba(255, 69, 0, 0.1)', border: '1px solid rgba(255, 69, 0, 0.2)' }}>
                <strong style={{ color: 'var(--gold)', display: 'block', marginBottom: '8px' }}>🤝 Teamwork Matters</strong>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  Though solo-able for the elite, your best chance lies in a coordinated team with proper roles and positioning.
                </p>
              </div>
            </div>

            <div style={{ padding: '16px', borderRadius: '8px', background: 'rgba(255, 0, 0, 0.15)', border: '1px solid rgba(255, 0, 0, 0.4)' }}>
              <strong style={{ color: '#FF6347', display: 'block', marginBottom: '8px' }}>🚨 REMEMBER THE SPACING MECHANIC</strong>
              <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Blackbeard's most lethal ability is his area-effect spellcast that automatically kills any characters within 4 SQM of each other. This is not a minor inconvenience—it is a match-ending mechanic. Your entire team MUST maintain constant maximum separation. Communicate positioning at all times. Do not cluster. Do not stand near teammates. Respect this mechanic, and you have a fighting chance. Ignore it, and watch your entire party die in an instant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            animation: 'fadeIn 0.3s ease-out',
            backdropFilter: 'blur(4px)'
          }}
          onClick={() => setSelectedImage(null)}
        >
          <style>{`
            @keyframes fadeIn {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }
            @keyframes slideIn {
              from {
                transform: scale(0.9) translateY(20px);
                opacity: 0;
              }
              to {
                transform: scale(1) translateY(0);
                opacity: 1;
              }
            }
          `}</style>
          <div
            style={{
              position: 'relative',
              maxWidth: '90vw',
              maxHeight: '90vh',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 69, 0, 0.3)',
              animation: 'slideIn 0.3s ease-out',
              background: '#1a1a1a'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(255, 69, 0, 0.2)',
                border: '1px solid rgba(255, 69, 0, 0.4)',
                color: 'var(--gold)',
                fontSize: '24px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10000,
                transition: 'all 0.2s',
                padding: 0
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 69, 0, 0.3)';
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 69, 0, 0.2)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              ×
            </button>

            {/* Image */}
            <img
              src={selectedImage}
              alt="Enlarged quest image"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain'
              }}
            />

            {/* Image Info Bar */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)',
                padding: '24px 16px 16px',
                color: 'var(--text-muted)',
                fontSize: '0.85rem',
                textAlign: 'center'
              }}
            >
              Click to close or press Escape
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
