'use client';

export const dynamic = 'force-dynamic';

import { useState } from 'react';

export default function FirstPromotionQuestPage() {
  const [expandedSteps, setExpandedSteps] = useState({});

  const questSteps = [
    {
      id: 1,
      number: 1,
      title: 'Reach Lady Menna',
      location: 'Orc Spawn',
      description: 'First you need to reach to Lady Menna which located in orc spawn. Please always remember you can exiva any NPC in game.',
      images: ['https://static.wikia.nocookie.net/evolisca-tibia/images/8/89/Mena1.PNG/revision/latest?cb=20240411015417'],
      tips: ['Use exiva to locate Lady Menna', 'Orc Spawn contains her location', 'Be cautious of the area']
    },
    {
      id: 2,
      number: 2,
      title: 'Start to Talk to Her',
      location: 'Orc Spawn',
      description: 'Approach Lady Menna and begin your conversation.',
      images: ['https://static.wikia.nocookie.net/evolisca-tibia/images/1/10/3.png/revision/latest?cb=20240411015722'],
      tips: ['Speak respectfully', 'Listen carefully to her words']
    },
    {
      id: 3,
      number: 3,
      title: 'Free Her Sister\'s Soul',
      location: 'Skeleton Spawn',
      description: 'She will ask you to free her sister\'s soul. You can find the statue at Skeleton spawn.',
      images: ['https://static.wikia.nocookie.net/evolisca-tibia/images/0/09/4.png/revision/latest?cb=20240411015905'],
      tips: ['Navigate to Skeleton Spawn', 'Look for the statue', 'This is your first major task']
    },
    {
      id: 4,
      number: 4,
      title: 'Locate the Statue',
      location: 'Skeleton Spawn',
      description: 'Find the statue at Skeleton Spawn that contains her sister\'s soul.',
      images: ['https://static.wikia.nocookie.net/evolisca-tibia/images/8/82/5.png/revision/latest?cb=20240411020001'],
      tips: ['The statue is clearly visible', 'Ancient magic surrounds it', 'Prepare yourself']
    },
    {
      id: 5,
      number: 5,
      title: 'Click on the Statue',
      location: 'Skeleton Spawn',
      description: 'Click on the statue then go back and report the mission to Lady Menna.',
      images: ['https://static.wikia.nocookie.net/evolisca-tibia/images/f/f1/6.png/revision/latest?cb=20240411020105'],
      tips: ['Right-click the statue to activate it', 'The soul will be released', 'Return immediately to Lady Menna']
    },
    {
      id: 6,
      number: 6,
      title: 'Report Back to Lady Menna',
      location: 'Orc Spawn',
      description: 'Congratulation! You finished your first mission. Now report to Lady Menna with your success.',
      images: ['https://static.wikia.nocookie.net/evolisca-tibia/images/9/9e/7.png/revision/latest?cb=20240411020240'],
      tips: ['Return to Orc Spawn', 'Speak with Lady Menna', 'Receive your first reward']
    },
    {
      id: 7,
      number: 7,
      title: 'Seek Captain Jack',
      location: 'South of the Temple',
      description: 'Now you need to go ahead to Captain Jack NPC. You can find him south of the temple.',
      images: ['https://static.wikia.nocookie.net/evolisca-tibia/images/6/60/8.png/revision/latest?cb=20240411020305'],
      tips: ['Travel south of the temple', 'Captain Jack awaits you', 'Prepare for new challenges']
    },
    {
      id: 8,
      number: 8,
      title: 'Ascend the Stairs',
      location: 'Temple Tower',
      description: 'Go (exani hur "up) same sqm then go up the stairs - you will find him.',
      images: ['https://static.wikia.nocookie.net/evolisca-tibia/images/7/7a/9.png/revision/latest?cb=20240411020337'],
      tips: ['Use exani hur to ascend', 'Navigate the stairs carefully', 'Captain Jack\'s chamber is at the top']
    },
    {
      id: 9,
      number: 9,
      title: 'Meet Captain Jack',
      location: 'Captain Jack\'s Chamber',
      description: 'You have arrived at Captain Jack\'s chamber. This legendary figure holds your next quest.',
      images: ['https://static.wikia.nocookie.net/evolisca-tibia/images/5/58/10.png/revision/latest?cb=20240411020453'],
      tips: ['Show respect to the captain', 'Listen to his mission', 'This is critical to your promotion']
    },
    {
      id: 10,
      number: 10,
      title: 'The Lost Citizen Doll',
      location: 'Captain Jack\'s Chamber',
      description: 'He will ask your assistant to bring him back his citizen doll.',
      images: ['https://static.wikia.nocookie.net/evolisca-tibia/images/5/59/11.png/revision/latest?cb=20240411020608'],
      tips: ['The doll is precious to him', 'It is lost in Dragon Lord Spawn', 'This is a test of your courage']
    },
    {
      id: 11,
      number: 11,
      title: 'Go to Dragon Lord Spawn',
      location: 'Dragon Lord Territory',
      description: 'Travel to the Dragon Lord Spawn to retrieve the citizen doll.',
      images: ['https://static.wikia.nocookie.net/evolisca-tibia/images/9/9e/12.png/revision/latest?cb=20240411020717'],
      tips: ['Dragons patrol this area', 'Stay alert and cautious', 'The doll is hidden here somewhere']
    },
    {
      id: 12,
      number: 12,
      title: 'Discover the Grave Gates',
      location: 'Dragon Lord Spawn - Grave District',
      description: 'Go full East as you see those Grave. Click first one on the left - it will tp you.',
      images: ['https://static.wikia.nocookie.net/evolisca-tibia/images/4/47/Grav.png/revision/latest?cb=20240411020749'],
      tips: ['Look for the grave markers', 'The left grave is your portal', 'Teleportation magic will activate']
    },
    {
      id: 13,
      number: 13,
      title: 'Teleport to Secret Realm',
      location: 'Between Realms',
      description: 'You are teleported to a secret realm by the grave magic.',
      images: ['https://static.wikia.nocookie.net/evolisca-tibia/images/c/c0/13.png/revision/latest?cb=20240411020857'],
      tips: ['The portal is instantaneous', 'You have entered a hidden area', 'Continue onward']
    },
    {
      id: 14,
      number: 14,
      title: 'Seek the Hidden Chest',
      location: 'Secret Dragon Realm',
      description: 'To this map go all the way south west - you will find the chest.',
      images: ['https://static.wikia.nocookie.net/evolisca-tibia/images/7/7b/14.png/revision/latest?cb=20240411020945'],
      tips: ['Head southwest on this map', 'Navigate carefully', 'The chest contains the doll']
    },
    {
      id: 15,
      number: 15,
      title: 'Retrieve the Citizen Doll',
      location: 'Secret Treasure Chamber',
      description: 'Make sure the Doll is inside your backpack then go report back to Captain Jack.',
      images: ['https://static.wikia.nocookie.net/evolisca-tibia/images/d/d6/15.png/revision/latest?cb=20240411021028'],
      tips: ['Take the doll from the chest', 'Place it in your backpack', 'Head back to Captain Jack immediately']
    },
    {
      id: 16,
      number: 16,
      title: 'Return to Captain Jack',
      location: 'Captain Jack\'s Chamber',
      description: 'Return to Captain Jack with the doll to complete this task.',
      images: ['https://static.wikia.nocookie.net/evolisca-tibia/images/c/c9/17.png/revision/latest?cb=20240411021133'],
      tips: ['Present the doll to Captain Jack', 'He will be pleased', 'More trials await']
    },
    {
      id: 17,
      number: 17,
      title: 'The Challenge of the Statue',
      location: 'Necromancer Spawn',
      description: 'Now he ask you to go to click on a statue as challenge. Go to Necromancer spawn.',
      images: ['https://static.wikia.nocookie.net/evolisca-tibia/images/8/88/18.png/revision/latest?cb=20240411021258'],
      tips: ['Travel to Necromancer Spawn', 'Find the statue', 'This tests your spirit']
    },
    {
      id: 18,
      number: 18,
      title: 'Navigate the Necromancer Realm',
      location: 'Necromancer Spawn',
      description: 'Go all way to east then north.',
      images: ['https://static.wikia.nocookie.net/evolisca-tibia/images/0/07/20.png/revision/latest?cb=20240411021346'],
      tips: ['Head east first', 'Then turn north', 'The statue awaits']
    },
    {
      id: 19,
      number: 19,
      title: 'Find the Dark Statue',
      location: 'Necromancer Spawn - North',
      description: 'Click on the Statue then go back to Captain jack to report the mission.',
      images: ['https://static.wikia.nocookie.net/evolisca-tibia/images/b/ba/19.png/revision/latest?cb=20240411021433'],
      tips: ['Right-click the statue', 'Dark magic surrounds it', 'Survive the encounter']
    },
    {
      id: 20,
      number: 20,
      title: 'Report the Trial\'s Success',
      location: 'Captain Jack\'s Chamber',
      description: 'Report back to Captain Jack after surviving the necromantic trial.',
      images: ['https://static.wikia.nocookie.net/evolisca-tibia/images/7/71/21.png/revision/latest?cb=20240411021520'],
      tips: ['Return to the captain', 'Show your strength', 'He recognizes your growth']
    },
    {
      id: 21,
      number: 21,
      title: 'Enter the Secret Cave',
      location: 'Secret Cavern',
      description: 'Now he will tp you into a secret cave. Walk till you reach the last floor.',
      images: ['https://static.wikia.nocookie.net/evolisca-tibia/images/2/24/24.png/revision/latest?cb=20240411021652'],
      tips: ['The cave is vast', 'Navigate carefully through levels', 'Descend to the deepest chamber']
    },
    {
      id: 22,
      number: 22,
      title: 'Reach the Last Floor',
      location: 'Secret Cavern - Final Level',
      description: 'After you reach last floor go east as first you need to use the light.',
      images: ['https://static.wikia.nocookie.net/evolisca-tibia/images/7/7a/23.png/revision/latest?cb=20240411021746'],
      tips: ['You are near the end', 'Head east on the final level', 'Ancient lights await']
    },
    {
      id: 23,
      number: 23,
      title: 'Activate the First Light',
      location: 'Secret Cavern - Final Chamber',
      description: 'Right click the light.',
      images: ['https://static.wikia.nocookie.net/evolisca-tibia/images/2/25/26.png/revision/latest?cb=20240411021903'],
      tips: ['Right-click the light source', 'Ancient magic will respond', 'Prepare for transformation']
    },
    {
      id: 24,
      number: 24,
      title: 'Travel Left and Find the Second Light',
      location: 'Secret Cavern - Western Path',
      description: 'Go left side.',
      images: ['https://static.wikia.nocookie.net/evolisca-tibia/images/a/a9/25.png/revision/latest?cb=20240411021944'],
      tips: ['Navigate left from the first light', 'Another light awaits', 'Continue forward']
    },
    {
      id: 25,
      number: 25,
      title: 'Activate the Second Light',
      location: 'Secret Cavern - Western Chamber',
      description: 'Right click it.',
      images: ['https://static.wikia.nocookie.net/evolisca-tibia/images/f/ff/27.png/revision/latest?cb=20240411022046'],
      tips: ['Right-click the second light', 'Both lights will converge', 'Magic will unlock new paths']
    },
    {
      id: 26,
      number: 26,
      title: 'Head South to the Chest',
      location: 'Secret Cavern - Southern Chamber',
      description: 'Go south to the chest and grab the reward.',
      images: ['https://static.wikia.nocookie.net/evolisca-tibia/images/b/b9/28.png/revision/latest?cb=20240411022133'],
      tips: ['Head south from the lights', 'The treasure chest awaits', 'Your reward is inside']
    },
    {
      id: 27,
      number: 27,
      title: 'Secure the Medal',
      location: 'Secret Cavern - Treasure Chamber',
      description: 'Make Sure you have the medal in your backpack before you go in tp.',
      images: ['https://static.wikia.nocookie.net/evolisca-tibia/images/5/50/29.png/revision/latest?cb=20240411022218'],
      tips: ['Take the medal from the chest', 'Guard it carefully', 'It is your promotion badge']
    },
    {
      id: 28,
      number: 28,
      title: 'Return to Captain Jack - Final Time',
      location: 'Captain Jack\'s Chamber',
      description: 'Report back to Captain Jack.',
      images: ['https://static.wikia.nocookie.net/evolisca-tibia/images/1/19/30.png/revision/latest?cb=20240411022259'],
      tips: ['Return to the captain with the medal', 'Show him your achievement', 'The final transformation begins']
    },
    {
      id: 29,
      number: 29,
      title: 'Claim Your Promotion',
      location: 'Captain Jack\'s Chamber',
      description: 'The medal will change to your last reward.',
      images: ['https://static.wikia.nocookie.net/evolisca-tibia/images/1/10/3.png/revision/latest?cb=20240411015722'],
      tips: ['The medal transforms', 'You are officially promoted', 'A new era begins']
    },
    {
      id: 30,
      number: 30,
      title: 'Final Achievement',
      location: 'Captain Jack\'s Chamber',
      description: 'Right click it and Congratulation you got promoted!',
      images: ['https://static.wikia.nocookie.net/evolisca-tibia/images/c/c9/17.png/revision/latest?cb=20240411021133'],
      tips: ['Right-click the transformed medal', 'Complete your first promotion', 'Welcome to the next level!']
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
          <span className="eyebrow">The Path to Glory</span>
          <h1>First Promotion Quest</h1>
          <p>
            Embark on an epic 30-step journey through danger and mystery. From Lady Menna's trial to the legendary challenges set by Captain Jack, navigate treacherous spawns, ancient statues, and the mysterious Secret Cavern. This transformation will test your courage, determination, and spirit. Claim the First Promotion Badge and become a true legend of Evolisca.
          </p>

          <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px', fontSize: '0.85rem' }}>
            <div>
              <strong style={{ color: 'var(--gold)', display: 'block', fontSize: '1.3rem' }}>30</strong>
              <span style={{ color: 'var(--text-muted)' }}>Epic Steps</span>
            </div>
            <div>
              <strong style={{ color: 'var(--gold)', display: 'block', fontSize: '1.3rem' }}>3</strong>
              <span style={{ color: 'var(--text-muted)' }}>Main Trials</span>
            </div>
            <div>
              <strong style={{ color: 'var(--gold)', display: 'block', fontSize: '1.3rem' }}>∞</strong>
              <span style={{ color: 'var(--text-muted)' }}>Glory Awaits</span>
            </div>
            <div>
              <strong style={{ color: 'var(--gold)', display: 'block', fontSize: '1.3rem' }}>Intermediate</strong>
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
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Chapter 1</span>
              <div style={{ color: 'var(--text)', fontWeight: '700', fontSize: '1.2rem' }}>Lady Menna's Trial</div>
              <p style={{ margin: '4px 0 0 0', fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>Free a tortured soul at Skeleton Spawn (Steps 1-6)</p>
            </div>

            <div style={{ padding: '12px', borderRadius: '8px', background: 'var(--bg-elevated)', border: '1px solid var(--line)' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Chapter 2</span>
              <div style={{ color: 'var(--text)', fontWeight: '700', fontSize: '1.2rem' }}>Captain Jack's Quests</div>
              <p style={{ margin: '4px 0 0 0', fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>Retrieve the Citizen Doll & face the Necromancer (Steps 7-20)</p>
            </div>

            <div style={{ padding: '12px', borderRadius: '8px', background: 'var(--bg-elevated)', border: '1px solid var(--line)' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Chapter 3</span>
              <div style={{ color: 'var(--text)', fontWeight: '700', fontSize: '1.2rem' }}>The Secret Cavern</div>
              <p style={{ margin: '4px 0 0 0', fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>Unlock ancient magic & claim promotion (Steps 21-30)</p>
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
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '12px' }}>
                          {step.images.map((image, idx) => (
                            <img
                              key={idx}
                              src={image}
                              alt={`${step.title} screenshot ${idx + 1}`}
                              style={{
                                width: '100%',
                                height: 'auto',
                                maxHeight: '400px',
                                objectFit: 'cover',
                                borderRadius: '8px',
                                border: '1px solid var(--line)',
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
            🏆 Your Path to Promotion
          </h2>

          <div style={{ display: 'grid', gap: '16px' }}>
            <p style={{ margin: 0, color: 'var(--text)', lineHeight: '1.7' }}>
              This quest consists of 30 epic steps across 3 chapters. Each chapter presents unique challenges that will test your skills and courage. From freeing Lady Menna's sister to recovering the Citizen Doll and surviving the Secret Cavern trials, you will be forever transformed.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
              <div style={{ padding: '16px', borderRadius: '8px', background: 'var(--bg-elevated)', border: '1px solid var(--line)' }}>
                <strong style={{ color: 'var(--text)', display: 'block', marginBottom: '8px' }}>⚔️ Prepare Well</strong>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  Bring healing items, protective gear, and weapons. The challenges demand respect and readiness.
                </p>
              </div>

              <div style={{ padding: '16px', borderRadius: '8px', background: 'var(--bg-elevated)', border: '1px solid var(--line)' }}>
                <strong style={{ color: 'var(--text)', display: 'block', marginBottom: '8px' }}>🎯 Stay Focused</strong>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  Follow the guide carefully. Every step has a purpose and builds toward your promotion.
                </p>
              </div>

              <div style={{ padding: '16px', borderRadius: '8px', background: 'var(--bg-elevated)', border: '1px solid var(--line)' }}>
                <strong style={{ color: 'var(--text)', display: 'block', marginBottom: '8px' }}>✨ Embrace Your Destiny</strong>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  The First Promotion Badge awaits. Your legend begins now. Make it legendary.
                </p>
              </div>
            </div>

            <div style={{ padding: '16px', borderRadius: '8px', background: 'var(--bg-elevated)', border: '1px solid var(--line)' }}>
              <strong style={{ color: 'var(--text)', display: 'block', marginBottom: '8px' }}>🌟 The Final Reward</strong>
              <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Upon completion, you will receive the prestigious First Promotion Badge. This medal transforms into your permanent mark of honor through Captain Jack's ancient ritual. You will gain access to greater quests and legendary adventures.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
