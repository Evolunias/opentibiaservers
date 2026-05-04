'use client';

export const dynamic = 'force-dynamic';

import { useState } from 'react';

export default function TalentResetQuestLevel860Page() {
  const [expandedSteps, setExpandedSteps] = useState({});

  const toggleStep = (stepId) => {
    setExpandedSteps((prev) => ({
      ...prev,
      [stepId]: !prev[stepId]
    }));
  };

  const questSteps = [
    {
      id: 1,
      number: 1,
      title: 'Discover the Quest Chamber',
      location: 'Quest Room - Level 860+ Section',
      description: 'Deep within the ancient Quest Room lies a legendary chamber reserved only for the mightiest adventurers. This is where the path to ultimate talent mastery begins. Level 860+ heroes with at least 400 talents have earned the right to attempt this perilous journey.',
      details: 'The chamber radiates with an otherworldly power. Ancient glyphs cover the walls, telling stories of champions past who ventured here seeking transformation. This is no ordinary quest—it is a crucible that will test every ounce of your strength, strategy, and spirit.',
      images: [
        '/images/quests/talent-reset-quest-level-860/step-01.webp'
      ],
      tips: [
        'Recommended for 5+ experienced players',
        'Level 1600+ with full damage reduction build',
        'Assemble your party with at least 1-2 elite knights and 1-2 druids for healing support'
      ]
    },
    {
      id: 2,
      number: 2,
      title: 'Gather Your Party & Prepare',
      location: 'Quest Entrance Chamber',
      description: 'Before descending into the depths, your party must synchronize and prepare for the battles ahead. This is where ultimate strategy meets raw power. Coordinate positions, establish communication, and ensure every team member understands their role in the trials to come.',
      details: 'The gathering point pulses with magical energy. Here, knights fortify their defenses, druids attune their healing magics, wizards and archers channel their devastating powers. Every moment of preparation could mean the difference between triumph and catastrophic defeat. The path downward awaits.',
      images: [
        '/images/quests/talent-reset-quest-level-860/step-02.webp'
      ],
      tips: [
        'Ensure all party members have full healing supplies',
        'Assign roles: tank, healer, ranged DPS, support',
        'Establish visual or text-based communication protocol'
      ]
    },
    {
      id: 3,
      number: 3,
      title: 'Descend to the Second Floor',
      location: 'Abyss Level Two - Ghazbaran Territory',
      description: 'The descent begins. As your party ventures into the second floor, you encounter swiftly moving Ghazbarans. These formidable creatures deal devastating damage and respawn with alarming speed. Precision and restraint are critical—avoid more than two simultaneously at all costs.',
      details: 'The air grows thick and oppressive. Ghazbarans emerge from the shadows, their forms shimmering with dark energy. Moving slowly and maintaining team cohesion is essential. Your elite knight must be prepared to use crowd control and defensive spells. Maintain maximum spacing and attack methodically. One mistake could unravel everything.',
      images: [
        '/images/quests/talent-reset-quest-level-860/step-03.webp'
      ],
      tips: [
        'Keep no more than 2 Ghazbarans engaged at once',
        'Three or more will overwhelm even prepared teams',
        'Knight should use challenge when engagement exceeds capacity',
        'Maintain continuous movement—standing still invites disaster'
      ]
    },
    {
      id: 4,
      number: 4,
      title: 'Clear the Third Floor Gauntlet',
      location: 'Abyss Level Three - Enemy Stronghold',
      description: 'The third floor presents a different nightmare—dense clusters of Ghazbarans mixed with the imposing Grandpa Lords. This chamber requires aggressive, coordinated clearing. Your wizards and archers must unleash their full arsenal of destructive magic to eliminate threats before the party becomes surrounded.',
      details: 'The chamber echoes with the roars of countless creatures. Grandpa Lords stand as sentinels among the Ghazbarans, their presence commanding respect and fear. The room itself seems alive with malevolence. Clear methodically from one area to the next, never allowing the enemy to control the battlefield. Momentum is your ally here.',
      images: [
        '/images/quests/talent-reset-quest-level-860/step-04.webp'
      ],
      tips: [
        'Focus fire on Grandpa Lords first to reduce threat',
        'Use area-of-effect spells to control groups',
        'Keep moving, never stand still in large concentrations',
        'Watch for respawn patterns and clear room in sections'
      ]
    },
    {
      id: 5,
      number: 5,
      title: 'Face the Elemental Dynamo - Part I',
      location: 'Abyss Level Three - Boss Chamber',
      description: 'You emerge into a crystalline chamber where the Elemental Dynamo awaits. This boss commands devastating pull abilities that drag unprepared adventurers directly into its melee range instantaneously. Position carefully, and be ready to react to its ultimate explosion attack which can obliterate even the most armored knights.',
      details: 'The Elemental Dynamo stands as a towering monument of raw elemental force. Its body crackles with energy, and its eyes glow with ancient malice. When it moves, the air distorts around it. This is where your strategy and discipline will be tested to their absolute limits. One careless step could be fatal.',
      images: [
        '/images/quests/talent-reset-quest-level-860/step-05.webp'
      ],
      tips: [
        'Stay at maximum range from the boss at all times',
        'Watch for pull attacks and prepare to move immediately',
        'Knight must isolate the boss and use defensive positioning',
        'Use stairs strategically to break line of sight if needed'
      ]
    },
    {
      id: 6,
      number: 6,
      title: 'Defeat the Elemental Dynamo - Part II',
      location: 'Abyss Level Three - Boss Chamber',
      description: 'The battle intensifies as the Elemental Dynamo\'s health diminishes. Its attack patterns become more aggressive and erratic. Maintain focus, coordinate heals, and keep distance. Your party\'s elite knight must continue isolating the boss, ensuring it cannot drag multiple party members to their doom. One unified effort—victory is within reach.',
      details: 'The power radiating from the boss grows exponentially as it nears defeat. Its ultimate explosion ability charges with terrifying frequency. Every healer must be ready to restore fallen comrades. The air itself seems to scream with the accumulated energy. Push forward. Victory awaits the disciplined.',
      images: [
        '/images/quests/talent-reset-quest-level-860/step-06.webp'
      ],
      tips: [
        'Do not leave the boss chamber prematurely',
        'Upper floor can respawn enemies and trap you',
        'Maintain strict position discipline and healing rotation',
        'Celebrate cautiously—more challenges await'
      ]
    },
    {
      id: 7,
      number: 7,
      title: 'Claim Your First Access Point',
      location: 'Abyss Level Three - Exit Chamber',
      description: 'As the Elemental Dynamo falls, its essence transforms into a shining corpse of radiant dust. This celestial matter is no mere decoration—it is the key to progress. One party member must drag this dust onto the designated tile to unlock the gate. Act with urgency, for the gate seals itself in 30 seconds or less.',
      details: 'The dust glows with ethereal light, pulsing with residual power. The gate looms before you, ancient and unyielding. Those who move swiftly claim their passage. Those who hesitate risk being trapped on the wrong side with no escape save the World Map. Haste and precision are virtues now.',
      images: [
        '/images/quests/talent-reset-quest-level-860/step-07.webp'
      ],
      tips: [
        'Drag the dust corpse onto the designated tile quickly',
        'Click the chest immediately after opening the gate',
        'Gate closes in 30 seconds or less',
        'Trapped players must use World Map to escape'
      ]
    },
    {
      id: 8,
      number: 8,
      title: 'Navigate Back & Locate the Western Chest',
      location: 'Abyss Level Two - Western Path',
      description: 'Your party regroups and backtracks up one floor. The path south down the corridor reveals a crucial choice. You must navigate to the western side of the chamber where a chest awaits. This first chest grants access to the next area. The location is clearly marked, but vigilance remains essential.',
      details: 'The upward path seems less threatening than the downward journey, yet danger lurks in familiarity. The western chest glows with faint magical aura, calling to the worthy. Retrieve it, click it, and prepare for the next phase of this legendary quest.',
      images: [
        '/images/quests/talent-reset-quest-level-860/step-08.webp'
      ],
      tips: [
        'Navigate carefully back up one floor',
        'Head south down the corridor',
        'Western chest is clearly visible',
        'Ensure all party members have clicked before proceeding'
      ]
    },
    {
      id: 9,
      number: 9,
      title: 'Retrieve the Eastern Chest',
      location: 'Abyss Level Two - Eastern Path',
      description: 'With the western chest claimed, your attention now turns to the east side of the chamber. Here awaits the second chest, equal in importance to its western counterpart. Both must be obtained before your party can access the gateway that leads to the next dimensional layer of this quest.',
      details: 'The eastern chest mirrors the western in both placement and significance. Together, these two chests form a key—not of metal or wood, but of pure magical resonance. Once both are activated, the path forward materializes before your very eyes.',
      images: [
        '/images/quests/talent-reset-quest-level-860/step-09.webp'
      ],
      tips: [
        'Eastern chest is on the opposite side from the western',
        'Both must be collected to proceed',
        'Watch for respawning enemies while collecting',
        'Reunite at the teleport location once both are obtained'
      ]
    },
    {
      id: 10,
      number: 10,
      title: 'Discover the Teleport Gateway - Part I',
      location: 'Abyss Level Two - Stairwell Junction',
      description: 'Having secured both chests, your party continues into the quest\'s final preparations. The stairwells from the eastern and western sides converge, leading you northward. As you ascend and regroup, a brilliant teleport gateway materializes. This mystical portal will transport your party to a new realm, one that brings you closer to the ultimate challenge.',
      details: 'The teleport crackles with elemental energy, its surface rippling like water. Its luminescence grows brighter as all party members approach. This gateway is the threshold between trials—once crossed, there is no turning back. Steel your resolve.',
      images: [
        '/images/quests/talent-reset-quest-level-860/step-10.webp'
      ],
      tips: [
        'All party members must be ready before teleporting',
        'No turning back once you cross the gateway',
        'Coordinate final preparations and healing',
        'Ensure everyone has adequate resources'
      ]
    },
    {
      id: 11,
      number: 11,
      title: 'Enter the New Realm',
      location: 'Abyss Sanctum - Entrance Chamber',
      description: 'You step through the teleport and emerge in a vast new chamber. The architecture here is different—more refined, yet somehow more menacing. This is the Abyss Sanctum, a place where only the most determined adventurers have ventured. The air itself seems to whisper warnings. Yet your quest continues.',
      details: 'The new realm pulses with accumulated magical energy from countless ages. Ancient runes cover every surface, each one a testament to the power that dwells here. Your destination lies ahead, but first you must clear the chamber before you.',
      images: [
        '/images/quests/talent-reset-quest-level-860/step-11.webp'
      ],
      tips: [
        'Survey the new chamber carefully',
        'Expect stronger enemies than before',
        'Maintain defensive formations',
        'Prepare for a significant combat encounter'
      ]
    },
    {
      id: 12,
      number: 12,
      title: 'Clear the Chamber & Face the First Mystic Conductor',
      location: 'Abyss Sanctum - Main Chamber',
      description: 'The chamber must be cleared of all hostility before the ultimate test arrives. As you eliminate the last of the defenders, a towering figure emerges from the shadows—the first Mystic Conductor. This boss grants a precious talent point for the first kill. It is a magnificent reward, but one earned through blood and determination. Isolate the boss. Distance yourself from its ultimate explosion.',
      details: 'The Mystic Conductor radiates with arcane power. Its presence alone shifts the magical balance of the entire chamber. Its ultimate ability explodes with force capable of annihilating unprepared adventurers in a single blast. Your knight must isolate it completely. Distance is survival.',
      images: [
        '/images/quests/talent-reset-quest-level-860/step-12.webp'
      ],
      tips: [
        'First Mystic Conductor kill grants a talent point',
        'Isolate the boss completely with your knight',
        'Keep everyone at maximum range',
        'Watch for ultimate ability charging patterns'
      ]
    },
    {
      id: 13,
      number: 13,
      title: 'Battle Multiple Mystic Conductors - Eastern Front',
      location: 'Abyss Sanctum - Eastern Chamber',
      description: 'As you progress deeper, the quest reveals its escalating complexity. Multiple Mystic Conductor battles await. The eastern chamber hosts the first of several encounters. These bosses appear sequentially, and each one demands the same level of precision and execution. Your party\'s synergy will be tested repeatedly.',
      details: 'The eastern chamber echoes with arcane chanting as another Mystic Conductor emerges. The tactical requirements remain constant: isolation, distance, and perfect team execution. Your muscles may weary, but your minds must remain sharp.',
      images: [
        '/images/quests/talent-reset-quest-level-860/step-13.webp'
      ],
      tips: [
        'Apply the same strategy as the first Mystic Conductor',
        'Multiple battles require stamina and focus',
        'Rotate healing and buff spells effectively',
        'Watch for party member fatigue'
      ]
    },
    {
      id: 14,
      number: 14,
      title: 'Battle Multiple Mystic Conductors - Central Front',
      location: 'Abyss Sanctum - Central Chamber',
      description: 'The central chamber presents another Mystic Conductor, but here the environment presents new challenges. Careful spatial awareness becomes critical. Your party must adapt to the chamber\'s unique layout while maintaining the same devastating focus required to eliminate these powerful foes.',
      details: 'Another Conductor awaits. The tempo of battle quickens. Fatigue begins to set in, but you press forward. The reward at the end of this journey burns in your mind, driving you onward through exhaustion and pain.',
      images: [
        '/images/quests/talent-reset-quest-level-860/step-14.webp'
      ],
      tips: [
        'Monitor party health and mana carefully',
        'Consider brief tactical retreats for healing',
        'Environmental awareness is now critical',
        'Maintain morale and communication'
      ]
    },
    {
      id: 15,
      number: 15,
      title: 'Battle Multiple Mystic Conductors - Western Front',
      location: 'Abyss Sanctum - Western Chamber',
      description: 'The western chamber presents the final standalone Mystic Conductor battle before the ultimate challenge. By this point, your party has refined their technique to a razor\'s edge. Every movement is practiced, every spell placement optimized. One more boss, then you move closer to your destiny.',
      details: 'The western chamber\'s Conductor falls like its brethren. Your party functions as a single organism now, each member understanding their role without communication. The end draws near. The final chambers await.',
      images: [
        '/images/quests/talent-reset-quest-level-860/step-15.webp'
      ],
      tips: [
        'This is the last individual Conductor battle',
        'Final group battle approaches',
        'Ensure healing supplies remain adequate',
        'Victory is nearly within your grasp'
      ]
    },
    {
      id: 16,
      number: 16,
      title: 'Advance Through the Monster Gauntlet',
      location: 'Abyss Sanctum - Progression Corridor',
      description: 'Beyond the individual Conductor battles lies a corridor filled with dense concentrations of powerful monsters. These are no mere minions—they are formidable foes that would challenge unprepared parties. However, you are no longer unprepared. You are seasoned, coordinated, and unstoppable. Clear with confidence and continue forward.',
      details: 'The monsters press in from all sides, but your party moves through them like a hot blade through butter. Momentum carries you forward. The final challenge awaits just beyond this gauntlet.',
      images: [
        '/images/quests/talent-reset-quest-level-860/step-16.webp'
      ],
      tips: [
        'Move steadily without stopping',
        'Use area-of-effect damage liberally',
        'Keep healers protected at the center',
        'Do not become overwhelmed—maintain formation'
      ]
    },
    {
      id: 17,
      number: 17,
      title: 'Navigate Extreme Monster Density',
      location: 'Abyss Sanctum - Density Chamber',
      description: 'You enter a chamber with overwhelming monster density. The sight alone would have terrified you at the quest\'s beginning. But you are no longer the adventurer who started this journey. Move methodically and slowly. Keep healers back and absolutely safe. Prioritize survival over speed. Progress inch by inch if necessary.',
      details: 'The chamber seems to writhe with life. Monsters stack upon monsters, a writhing mass of hostility. Yet somewhere within or beyond this chaos lies your path forward. Navigate carefully. One mistake could be catastrophic.',
      images: [],
      tips: [
        'Move slowly through the density',
        'Protect healers at all costs',
        'Do not rush—methodical progress is victory',
        'Clear in waves, never overextend'
      ]
    },
    {
      id: 18,
      number: 18,
      title: 'Enter the Four Chambers of Trial',
      location: 'Abyss Sanctum - Pillar Chambers',
      description: 'You have finally reached the legendary Four Chambers of Trial—a test unlike any other in Evolisca. Each chamber contains a powerful boss that must be defeated, and each contains a pillar that grants +60 HP and +60 Mana from rune enhancement. This is where the Talent Reset truly grants its blessing. But heed this warning with absolute seriousness: Each player must enter their designated chamber, defeat the boss, and click the pillar. Do NOT exit the chamber until every character in that room has clicked their pillar. If even one player leaves prematurely, the entire room RESETS and the boss must be killed again.',
      details: 'The four chambers pulse with destiny. Your effort throughout this quest has led to this singular moment. These pillars will increase your vital reserves permanently. But the price of carelessness is dear. Coordinate perfectly. Communicate clearly. Execute flawlessly.',
      images: [
        '/images/quests/talent-reset-quest-level-860/step-17.webp'
      ],
      tips: [
        'Each room has its own boss—must be killed once per character',
        'After killing the boss, ALL players must click the pillar',
        'Do NOT leave until everyone has clicked',
        'Room resets if anyone exits prematurely',
        'Communicate constantly to ensure no one leaves early'
      ]
    },
    {
      id: 19,
      number: 19,
      title: 'Conquer the Southeast Chamber',
      location: 'Abyss Sanctum - Southeast Pillar Chamber',
      description: 'The southeast chamber awaits your party\'s assault. Defeat the boss within, claim your +60 HP and +60 Mana enhancement from the pillar. Follow the sacred rule: remain in the chamber until every party member has clicked the pillar. This is the first of four, but the importance cannot be understated.',
      details: 'The boss in this chamber is formidable, but your party has faced worse. Once defeated, the pillar will glow with welcoming light. One by one, each character approaches and absorbs its blessings. Only when all have done so may you progress.',
      images: [
        '/images/quests/talent-reset-quest-level-860/step-18.webp'
      ],
      tips: [
        'Kill the boss methodically',
        'Gather around the pillar after victory',
        'Each player clicks the pillar individually',
        'Wait for confirmation from all team members'
      ]
    },
    {
      id: 20,
      number: 20,
      title: 'Dominate the Southwest Chamber - Part I',
      location: 'Abyss Sanctum - Southwest Pillar Chamber',
      description: 'Moving to the southwest chamber, you face another boss trial. The rhythm is familiar now—defeat, gather, click, confirm. Your party executes this sequence with practiced precision. The second set of enhancements awaits those disciplined enough to claim them.',
      details: 'The southwest chamber echoes with the sounds of battle. Another boss falls under your coordinated assault. The pillar glows. The ritual begins anew. +60 HP, +60 Mana—permanent increases to your vital reserves.',
      images: [
        '/images/quests/talent-reset-quest-level-860/step-19.webp'
      ],
      tips: [
        'Apply the same tactics as the southeast chamber',
        'Ensure complete participation in pillar activation',
        'Two chambers complete—two remain'
      ]
    },
    {
      id: 21,
      number: 21,
      title: 'Dominate the Southwest Chamber - Part II',
      location: 'Abyss Sanctum - Southwest Pillar Chamber (Victory)',
      description: 'As the southeast boss falls and your party clusters around the pillar, the transformation begins. Each character steps forward and touches the mystical monument. A surge of vitality flows through them. This is power earned through blood, sweat, and unshakable unity.',
      details: 'The pillar\'s light engulfs each party member in turn. You feel stronger—healthier, more resilient. The enhancement is real and permanent. You have grown mightier. Two chambers conquered. Two more await.',
      images: [
        '/images/quests/talent-reset-quest-level-860/step-20.webp'
      ],
      tips: [
        'Celebrate this small victory',
        'Prepare for the northwest and northeast chambers',
        'Maintain focus despite fatigue'
      ]
    },
    {
      id: 22,
      number: 22,
      title: 'Triumph in the Northwest Chamber',
      location: 'Abyss Sanctum - Northwest Pillar Chamber',
      description: 'The northwest chamber presents the third of four trials. By now, your party\'s coordination is flawless. The boss is dispatched with efficiency. The pillar grants its blessing. You are drawing very close to the culmination of this epic quest. Only one chamber remains after this.',
      details: 'The northwest battle feels almost routine now—a testament to how far your party has come. The boss falls, the pillar glows, and once again your team gathers to claim their enhancement. +60 HP, +60 Mana. The accumulation is becoming significant.',
      images: [
        '/images/quests/talent-reset-quest-level-860/step-21.webp'
      ],
      tips: [
        'Third chamber complete—final chamber awaits',
        'Morale should be high—victory is within sight',
        'Prepare for the ultimate revelation'
      ]
    },
    {
      id: 23,
      number: 23,
      title: 'Walk the Corridor of Destiny',
      location: 'Abyss Sanctum - Final Corridor',
      description: 'You have conquered three of four chambers. Now, a magnificent corridor opens before you—one that seems to bridge the mundane world with the celestial. This is the walk toward your ultimate reward. The corridor radiates with accumulated power from your collective victories. Step forward, knowing that you have earned the right to walk this path.',
      details: 'The corridor is lined with monuments to past champions. Their names are carved into the walls, their achievements immortalized. Soon, your own names will join them. The final chamber and reward room await at the corridor\'s end.',
      images: [
        '/images/quests/talent-reset-quest-level-860/step-22.webp'
      ],
      tips: [
        'Take a moment to appreciate your journey',
        'The final chamber is just ahead',
        'Your legend is about to be written'
      ]
    },
    {
      id: 24,
      number: 24,
      title: 'Complete the Final Chamber - Part I',
      location: 'Abyss Sanctum - Final Pillar Chamber (Northeast)',
      description: 'The final chamber awaits. This is the fourth and ultimate trial. Defeat the boss, gather at the pillar, and ensure every party member clicks it. Once this is done, you will have completed the Four Chambers of Trial. The transformation will be complete. You will have earned +240 HP and +240 Mana combined from all four rune increases. The path to even greater power opens before you.',
      details: 'The boss in the final chamber seems almost aware of its significance. It fights with desperate ferocity, but your party is unstoppable. The pillar beyond pulses with the culmination of all four chambers\' power. One last coordinated effort. One last moment of unity.',
      images: [
        '/images/quests/talent-reset-quest-level-860/step-23.webp'
      ],
      tips: [
        'This is the final chamber—everything comes together now',
        'Fight with the knowledge that victory is assured',
        'The pillar grants the final blessing'
      ]
    },
    {
      id: 25,
      number: 25,
      title: 'Claim Your Legendary Reward',
      location: 'Abyss Sanctum - Reward Chamber',
      description: 'You have transcended. Every chamber conquered, every boss defeated, every pillar activated. Your party approaches the final chest, and as you click it, a magnificent message appears: "You have mastered your talents and should no longer require items to reset them. Talent Page 3 is now available!" The transformation is complete. You have unlocked a new tier of power, a new page of talents, a new level of possibility.',
      details: 'The chest glows with transcendent light as you receive this ultimate acknowledgment. Your journey through the Abyss Sanctum is complete. You have earned the right to reset your talents without external items—a privilege reserved only for those who have proven themselves worthy through this legendary quest. Talent Page 3 opens before you, a vast expanse of new possibilities, new powers, new destinies to explore.',
      images: [
        '/images/quests/talent-reset-quest-level-860/step-24.webp'
      ],
      tips: [
        'The message confirms completion: "Talent Page 3 is now available!"',
        'You can now reset talents without requiring reset items',
        'Access to deeper character progression awaits',
        'Your legend is now eternal'
      ]
    }
  ];

  return (
    <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 20px' }}>
      {/* Header */}
      <section className="content-section" style={{ marginBottom: '40px' }}>
        <div style={{ padding: '24px', borderRadius: '12px', background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1) 0%, rgba(105, 117, 101, 0.1) 100%)', border: '1px solid rgba(251, 191, 36, 0.3)' }}>
          <h1 style={{ margin: '0 0 12px 0', fontSize: '2rem', color: 'var(--gold)', fontWeight: '900' }}>
            ⚔️ Talent Reset Quest (Level 860+)
          </h1>
          <p style={{ margin: '0 0 16px 0', color: 'var(--text)', lineHeight: '1.7' }}>
            A legendary journey into the depths of the Abyss Sanctum. Defeat the Elemental Dynamo, survive multiple Mystic Conductor battles, and conquer the Four Chambers of Trial to unlock Talent Page 3 and gain +240 HP / +240 Mana Rune Increase.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginTop: '16px' }}>
            <div style={{ padding: '12px', borderRadius: '8px', background: 'rgba(100, 150, 255, 0.1)', border: '1px solid rgba(100, 150, 255, 0.2)' }}>
              <strong style={{ color: 'var(--gold)', fontSize: '0.9rem' }}>Requirement</strong>
              <p style={{ margin: '4px 0 0 0', color: 'var(--text-muted)', fontSize: '0.85rem' }}>Level 1600+ with 400+ Talents</p>
            </div>
            <div style={{ padding: '12px', borderRadius: '8px', background: 'rgba(100, 150, 255, 0.1)', border: '1px solid rgba(100, 150, 255, 0.2)' }}>
              <strong style={{ color: 'var(--gold)', fontSize: '0.9rem' }}>Party Size</strong>
              <p style={{ margin: '4px 0 0 0', color: 'var(--text-muted)', fontSize: '0.85rem' }}>5+ Players Recommended</p>
            </div>
            <div style={{ padding: '12px', borderRadius: '8px', background: 'rgba(100, 150, 255, 0.1)', border: '1px solid rgba(100, 150, 255, 0.2)' }}>
              <strong style={{ color: 'var(--gold)', fontSize: '0.9rem' }}>Reward</strong>
              <p style={{ margin: '4px 0 0 0', color: 'var(--text-muted)', fontSize: '0.85rem' }}>Talent Page 3 + +240 HP/Mana</p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Tips */}
      <section className="content-section" style={{ marginBottom: '40px' }}>
        <div style={{ padding: '24px', borderRadius: '12px', background: 'linear-gradient(135deg, rgba(255, 100, 100, 0.1) 0%, rgba(255, 150, 100, 0.1) 100%)', border: '2px solid rgba(255, 100, 100, 0.4)' }}>
          <h2 style={{ margin: '0 0 16px 0', fontSize: '1.3rem', color: '#ff6b6b', fontWeight: '900' }}>
            ⚠️ CRITICAL: Special Tips
          </h2>
          <p style={{ margin: 0, color: 'var(--text)', lineHeight: '1.8', fontSize: '0.95rem' }}>
            When you enter the pillar rooms, strict coordination is essential for success. Ensure that no one enters or leaves the room until every party member has clicked their pillar after defeating the boss. Each room has a built-in mechanic on its doors: if any player exits before all characters have clicked the pillar, the room will reset, the boss will respawn, and all reward effects will be disabled. <strong>I repeat, do not exit the room until every character has clicked the pillar once the boss is killed.</strong>
          </p>
        </div>
      </section>

      {/* Quest Steps */}
      <section className="content-section">
        <h2 style={{ fontSize: '1.5rem', color: 'var(--gold)', marginBottom: '24px', fontWeight: '700' }}>📜 Your Epic Journey</h2>
        <div style={{ display: 'grid', gap: '16px' }}>
          {questSteps.map((step) => {
            const isExpanded = expandedSteps[step.id];

            return (
              <div
                key={step.id}
                onClick={() => toggleStep(step.id)}
                style={{
                  padding: '16px',
                  borderRadius: '8px',
                  background: 'rgba(251, 191, 36, 0.08)',
                  border: '1px solid rgba(251, 191, 36, 0.2)',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
              >
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
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
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px', marginLeft: '16px' }}>
                    <span style={{
                      padding: '4px 12px',
                      borderRadius: '6px',
                      background: 'rgba(251, 191, 36, 0.2)',
                      border: '1px solid rgba(251, 191, 36, 0.4)',
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
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', marginLeft: '52px', marginTop: '12px' }}>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: '600' }}>
                    {isExpanded ? 'Hide Details' : 'Explore Details'}
                  </span>
                  <span style={{ color: 'var(--gold)', fontSize: '1.2rem', fontWeight: '700' }}>
                    {isExpanded ? '−' : '+'}
                  </span>
                </div>

                {/* Expanded Content */}
                {isExpanded && (
                  <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(251, 191, 36, 0.2)', display: 'grid', gap: '16px' }}>
                    {/* Detailed Description */}
                    <div>
                      <h4 style={{ margin: '0 0 8px 0', color: 'var(--gold)', fontWeight: '700' }}>📖 The Full Story</h4>
                      <p style={{ margin: 0, color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '0.9rem' }}>
                        {step.details}
                      </p>
                    </div>

                    {/* Image Gallery */}
                    {step.images && step.images.length > 0 && (
                      <div>
                        <h4 style={{ margin: '0 0 12px 0', color: 'var(--gold)', fontWeight: '700' }}>🎨 Visual Guide</h4>
                        <div style={{
                          display: 'grid',
                          gridTemplateColumns: step.images.length === 3 ? 'repeat(3, 1fr)' : step.images.length === 2 ? 'repeat(2, 1fr)' : '1fr',
                          gap: '12px'
                        }}>
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
                                border: '1px solid rgba(251, 191, 36, 0.3)',
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
                        <h4 style={{ margin: '0 0 8px 0', color: '#90ee90', fontWeight: '700' }}>💡 Adventurer's Tips</h4>
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
        <div style={{ padding: '24px', borderRadius: '12px', background: 'linear-gradient(135deg, rgba(105, 117, 101, 0.15) 0%, rgba(251, 191, 36, 0.08) 100%)', border: '1px solid rgba(105, 117, 101, 0.3)' }}>
          <h2 style={{ margin: '0 0 16px 0', fontSize: '1.3rem', color: 'var(--gold)' }}>
            🏆 Master Your Destiny
          </h2>

          <div style={{ display: 'grid', gap: '16px' }}>
            <p style={{ margin: 0, color: 'var(--text)', lineHeight: '1.7' }}>
              This quest represents the pinnacle of Evolisca\'s challenges. It demands not just power, but unity, discipline, and unwavering determination. Your party will face trials that test every aspect of your capabilities. By the time you claim your final reward—unlocking Talent Page 3 and gaining +240 HP and +240 Mana through rune enhancement—you will have transcended your former self.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
              <div style={{ padding: '16px', borderRadius: '8px', background: 'rgba(100, 150, 255, 0.1)', border: '1px solid rgba(100, 150, 255, 0.2)' }}>
                <strong style={{ color: 'var(--gold)', display: 'block', marginBottom: '8px' }}>⚔️ Party Composition</strong>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  1-2 Elite Knights, 1-2 Druids for healing/revive, Wizards and Archers for damage. Ensure role diversity and experience.
                </p>
              </div>

              <div style={{ padding: '16px', borderRadius: '8px', background: 'rgba(100, 150, 255, 0.1)', border: '1px solid rgba(100, 150, 255, 0.2)' }}>
                <strong style={{ color: 'var(--gold)', display: 'block', marginBottom: '8px' }}>🛡️ Critical Tactics</strong>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  Isolate bosses with knights, maintain maximum range, coordinate healing, prevent premature chamber exits.
                </p>
              </div>

              <div style={{ padding: '16px', borderRadius: '8px', background: 'rgba(100, 150, 255, 0.1)', border: '1px solid rgba(100, 150, 255, 0.2)' }}>
                <strong style={{ color: 'var(--gold)', display: 'block', marginBottom: '8px' }}>💎 Four Chambers Rule</strong>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  After defeating each boss, ALL players must click the pillar before exiting or the room resets completely.
                </p>
              </div>

              <div style={{ padding: '16px', borderRadius: '8px', background: 'rgba(100, 150, 255, 0.1)', border: '1px solid rgba(100, 150, 255, 0.2)' }}>
                <strong style={{ color: 'var(--gold)', display: 'block', marginBottom: '8px' }}>✨ Ultimate Reward</strong>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  Talent Page 3 becomes available. You can now reset talents without items. A privilege reserved for the worthy.
                </p>
              </div>
            </div>

            <div style={{ padding: '16px', borderRadius: '8px', background: 'rgba(251, 191, 36, 0.15)', border: '1px solid rgba(251, 191, 36, 0.4)' }}>
              <strong style={{ color: 'var(--gold)', display: 'block', marginBottom: '8px' }}>🌟 Your Transformation</strong>
              <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                This journey will forge you in fire. You will emerge not just stronger in statistics, but transformed in spirit. Your legend will echo through Evolisca\'s halls. The Talent Reset grants you the tools to customize your power further. Combined with +240 HP and +240 Mana, you become a force of nature. Greater quests, legendary allies, and untold adventures now await those bold enough to accept them.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
