'use client';

export const dynamic = 'force-dynamic';

import { useState } from 'react';
import Link from 'next/link';

const questContent = {
  'little-angel-wand-quest': {
    title: 'Little Angel Wand Quest',
    levelRequirement: 100,
    difficulty: 'medium',
    duration: '15-20 minutes',
    partySize: 1,
    reward: 'Little Angel Wand',
    description: 'A mystical quest to retrieve the enchanted Little Angel Wand from the depths of the Diamond Servant spawn. Navigate through the treacherous underground chambers to reach the bottom floor, where an ancient globe awaits those brave enough to seek it.',
    sections: [
      {
        id: 1,
        title: 'The Quest for the Little Angel Wand',
        content: 'The Little Angel Wand is a treasure sought by many adventurers. This mystical staff is said to glow with divine light and grant those who wield it a connection to the celestial realm. Your journey begins with a simple task—venture to the Diamond Servant spawn and navigate to its deepest chamber.',
        type: 'intro'
      },
      {
        id: 2,
        title: 'Requirements',
        content: 'Minimum level 100. This is a solo adventure—bring your courage and determination to face whatever lies in the depths.',
        type: 'requirement',
        icon: '⚠️'
      },
      {
        id: 3,
        title: 'Step 1: Locate the Diamond Servant Spawn',
        content: 'Your first objective is to find the entrance to the Diamond Servant spawn. This mystical location is home to powerful diamond-armored servants who guard the sacred chambers beneath.',
        objective: 'Locate and enter the Diamond Servant spawn',
        images: ['https://cdn.builder.io/api/v1/image/assets%2F8e119e6cf53f40d0960e066a2d27e017%2F2db9368855734afda7d0c182c24466e3?format=webp&width=800&height=1200'],
        tip: 'The entrance is well-traveled by adventurers. Follow the path marked by recent footprints and magical auras.',
        type: 'step'
      },
      {
        id: 4,
        title: 'Step 2: Navigate Through the Upper Chambers',
        content: 'Upon entering the spawn, you\'ll find yourself in vast underground chambers filled with Diamond Servants. These creatures are formidable guards, but they won\'t stop you if you move with purpose and determination. Keep your focus on descending deeper into the facility.',
        objective: 'Navigate through the upper chambers safely',
        images: ['https://cdn.builder.io/api/v1/image/assets%2F8e119e6cf53f40d0960e066a2d27e017%2Fd3c096b1863f44d58225d8b9cfe2792a?format=webp&width=800&height=1200'],
        steps: [
          'Move cautiously through the upper floors where Diamond Servants patrol',
          'Avoid unnecessary combat—you are seeking treasure, not battle',
          'Look for downward passages and descending staircases',
          'Pay attention to the layout and memorize key landmarks for your return journey'
        ],
        tip: 'The creatures here are territorial but not aggressive if you don\'t provoke them. Move swiftly and avoid blocking their paths.',
        type: 'step'
      },
      {
        id: 5,
        title: 'Step 3: Descend to the Middle Levels',
        content: 'As you move deeper into the spawn, the air grows colder and more mystical. The architecture shifts, becoming more ornate and magical. You\'re getting closer to the ancient heart of the Diamond Servant domain.',
        objective: 'Reach the middle levels of the spawn',
        images: ['https://cdn.builder.io/api/v1/image/assets%2F8e119e6cf53f40d0960e066a2d27e017%2F34ccc9ac2de0428eb059e1dc7b12f3ca?format=webp&width=800&height=1200'],
        tip: 'You may encounter stronger Diamond Servants at these levels. Stay alert and maintain your pace.',
        type: 'step'
      },
      {
        id: 6,
        title: 'Step 4: Press Forward to the Lower Depths',
        content: 'Continue your descent through the increasingly mysterious chambers. The magical energy grows stronger with each floor. You are approaching the sacred location where the Little Angel Wand is kept.',
        objective: 'Reach the lower depths of the spawn',
        images: ['https://cdn.builder.io/api/v1/image/assets%2F8e119e6cf53f40d0960e066a2d27e017%2F59f309687d7247e9a77591e116d49762?format=webp&width=800&height=1200'],
        steps: [
          'Continue searching for descending pathways',
          'The lower levels contain more ancient and powerful magic',
          'Watch for glowing runes and mystical markers—they guide you to sacred chambers'
        ],
        tip: 'Trust your instincts. The sacred chamber will call to you as you approach.',
        type: 'step'
      },
      {
        id: 7,
        title: 'Step 5: Reach the Bottom Furthest Floor',
        content: 'You have finally reached the bottom furthest floor of the Diamond Servant spawn—the sacred chamber where the Little Angel Wand is protected. This ancient hall is bathed in ethereal light and resonates with celestial energy.',
        objective: 'Arrive at the bottom furthest floor',
        images: ['https://cdn.builder.io/api/v1/image/assets%2F8e119e6cf53f40d0960e066a2d27e017%2Fd67773a0bcc646558d7180bfbc13c2b6?format=webp&width=800&height=1200'],
        tip: 'You are now in the heart of the spawn. Feel the ancient magic surrounding you—you are close to your prize.',
        type: 'step'
      },
      {
        id: 8,
        title: 'Step 6: Locate the Glowing Globe',
        content: 'Now comes the crucial moment. Look carefully at the top right corner of the chamber. There, you will see a glowing globe—an enchanted artifact that holds the power to reveal and grant access to the Little Angel Wand. This mystical object shimmers with otherworldly light, almost as if it is waiting for you.',
        objective: 'Find the glowing globe at the top right corner',
        images: ['https://cdn.builder.io/api/v1/image/assets%2F8e119e6cf53f40d0960e066a2d27e017%2F732a4075387148f4ab7c178467844691?format=webp&width=800&height=1200'],
        steps: [
          'Look toward the top right area of the chamber',
          'The globe will appear to glow with divine light',
          'Notice the celestial symbols surrounding it—these mark its importance',
          'Position yourself to interact with the artifact'
        ],
        tip: 'The globe is the gateway to your reward. Only those who reach this deepest point can interact with it.',
        type: 'step'
      },
      {
        id: 9,
        title: 'Step 7: Click the Globe and Claim Your Prize',
        content: 'This is the moment you have been waiting for. Take a deep breath and click the glowing globe. The ancient magic will recognize your worthiness and grant you the Little Angel Wand. Feel the celestial energy flow through you as the magical staff becomes yours.',
        objective: 'Click the globe and obtain the Little Angel Wand',
        steps: [
          'Approach the glowing globe with confidence',
          'Click on the celestial artifact',
          'Watch as the magical energy surrounds you',
          'The Little Angel Wand will manifest in your hands',
          'The quest is complete—you are now blessed with this divine weapon'
        ],
        tip: 'Congratulations! You have proven yourself worthy of the Little Angel Wand. This powerful artifact is now yours to command.',
        type: 'step'
      },
      {
        id: 10,
        title: 'Victory and Divine Blessing',
        content: 'You have successfully retrieved the Little Angel Wand! This enchanted staff radiates with celestial power and will serve you well in your future adventures. The mystical energy contained within it will enhance your abilities and grant you favor with the divine forces of Evolisca. Wear this achievement with pride—you have conquered the depths of the Diamond Servant spawn and emerged victorious. May the Little Angel Wand guide your path forward.',
        type: 'conclusion'
      }
    ]
  },
  'nubien-legs-quest': {
    title: 'Nubien Legs Quest',
    levelRequirement: 1200,
    difficulty: 'hard',
    duration: '30-45 minutes',
    partySize: 2,
    reward: 'Nubien Legs',
    description: 'Journey through dangerous Bonelord territory and into the infernal Annihilator\'s chamber. Face waves of Fire Elementals, solve elemental puzzles, and claim one of the most coveted pieces of legendary armor in all of Evolisca.',
    sections: [
      {
        id: 1,
        title: 'The Path to Legendary Legs',
        content: 'The Nubien Legs are no ordinary armor. Forged in the heart of elemental fire and guarded by the most ruthless demons of the Annihilator\'s realm, they represent the pinnacle of warrior advancement. Only those brave enough to enter the inferno and cunning enough to survive it will emerge with these legendary boots adorning their feet. Your journey begins at an unremarkable threshold—but what lies beyond is anything but ordinary.',
        type: 'intro'
      },
      {
        id: 2,
        title: 'Requirements',
        content: 'Minimum level 1200. Solo adventure—bring nothing but your skill and determination.',
        type: 'requirement',
        icon: '⚠️'
      },
      {
        id: 3,
        title: 'Step 1: Find the Quest Entrance',
        content: 'Your adventure begins at the threshold of legend. The entrance to the Nubien Legs quest awaits in a hidden chamber, a sanctuary before the storm.',
        objective: 'Locate the quest entrance room',
        images: ['/images/downloaded/builder-image-2.webp'],
        tip: 'Take note of your surroundings—this is your last refuge before entering the realm of elder monsters.',
        type: 'step'
      },
      {
        id: 4,
        title: 'Step 2: Speak with NPC Thornback',
        content: 'At the entrance, you\'ll find Thornback, the ancient NPC who guards access to the Annihilator\'s domain. This wise guardian has witnessed countless warriors attempt this quest, and only the strongest have returned.',
        objective: 'Pay the quest fee and receive blessing',
        images: ['/images/downloaded/builder-image-2.webp'],
        steps: [
          'Approach NPC Thornback and initiate the quest',
          'Pay the quest cost of 250 Star Coins—a small price for such legendary reward',
          'Receive your blessing and gain passage to the Elder Bonelords spawn'
        ],
        tip: 'Ensure you have 250 Star Coins in your inventory before speaking with Thornback. There\'s no turning back once you\'ve paid the price.',
        type: 'step'
      },
      {
        id: 5,
        title: 'Step 3: Enter the Elder Bonelords Spawn',
        content: 'With Thornback\'s blessing, you gain access to the Elder Bonelords domain—a realm of undead warriors and ancient magic. This is where your trial truly begins. Navigate through this deadly territory with caution and purpose.',
        objective: 'Survive and navigate through Elder Bonelords territory',
        images: ['/images/downloaded/builder-image-2.webp'],
        steps: [
          'Enter the spawn point and locate the teleport pathway',
          'Avoid or dispatch the Elder Bonelords that patrol the area',
          'Move with purpose toward the mirror spawn teleport'
        ],
        tip: 'The Elder Bonelords are formidable but not your ultimate challenge. Stay focused on finding the teleport to the next phase.',
        type: 'step'
      },
      {
        id: 6,
        title: 'Step 4: Locate and Use the Teleport',
        content: 'Hidden within the Elder Bonelords spawn lies a powerful teleport that will transport you to the mirror spawn area. This is where you\'ll gain access to the true heart of the Annihilator\'s chamber.',
        objective: 'Find and activate the teleport portal',
        images: ['/images/downloaded/builder-image-2.webp'],
        steps: [
          'Scan the Elder Bonelords spawn for the teleport location',
          'The teleport will glow with ethereal light—follow it',
          'Step into the portal and prepare for elemental chaos'
        ],
        tip: 'The teleport is guarded by the spawn\'s denizens. If you\'re struggling, retreat and regather your strength before attempting again.',
        type: 'step'
      },
      {
        id: 7,
        title: 'Step 5: Seek the Dwarven Statue',
        content: 'In the mirror spawn, you\'ll discover an ancient Dwarven Statue of immense power. This artifact is the key to unlocking passage to the Annihilator\'s throne room and the fire elementals that guard the Nubien Legs.',
        objective: 'Find and interact with the Dwarven Statue',
        images: ['/images/downloaded/builder-image-2.webp', '/images/downloaded/builder-image-2.webp'],
        twoColumns: true,
        steps: [
          'Navigate through the mirror spawn carefully',
          'Locate the Dwarven Statue—it stands as a sentinel of old magic',
          'Click the statue to receive its blessing and permission to enter the Annihilator quest'
        ],
        tip: 'The Dwarven Statue recognizes only those worthy of facing the fire. If you interact with it, you\'re declaring your readiness for the trials ahead.',
        type: 'step'
      },
      {
        id: 8,
        title: 'Step 6: Return to Thornback for Confirmation',
        content: 'With the Dwarven Statue\'s blessing secured, you must return to NPC Thornback. This seasoned guardian will acknowledge your progress and provide final preparation for the inferno ahead.',
        objective: 'Report back to Thornback for final instructions',
        images: [],
        steps: [
          'Use the teleport network or navigate back to the quest entrance',
          'Return to the northeast teleport where Thornback awaits',
          'Speak with Thornback—he will sense your newfound power and grant you passage to the final chamber'
        ],
        tip: 'Thornback will offer final wisdom. Listen carefully—his words may save your life in the battles ahead.',
        type: 'step'
      },
      {
        id: 9,
        title: 'Step 7: Enter the Annihilator\'s Chamber',
        content: 'Now comes the ultimate test. The Annihilator\'s chamber is a maelstrom of fire, heat, and devastating magical power. Fire Elementals of terrifying strength flood this realm, dealing tremendous damage with every attack. But here\'s the secret: they possess low HP, and with the right strategy, they can be defeated.',
        objective: 'Survive and defeat the Fire Elementals',
        images: ['/images/downloaded/builder-image-2.webp'],
        steps: [
          'Engage the Fire Elementals with caution and precision',
          'Target one elemental at a time—divide and conquer',
          'Use crowd control abilities to manage multiple threats',
          'For wizards: Cast Confusion on the Fire Elementals. They deal tremendous damage, but Confusion will render them helpless and turn the tide in your favor',
          'Avoid prolonged melee exchanges—your mobility and magic are your greatest assets',
          'Eliminate all Fire Elementals blocking the path to the reward chest'
        ],
        tip: 'Fire Elementals are powerful but fragile. Quick, precise strikes and smart ability usage will triumph over brute force. If you\'re a wizard, Confusion is your best friend here.',
        type: 'step'
      },
      {
        id: 10,
        title: 'Step 8: Claim Your Legendary Reward',
        content: 'You\'ve survived the inferno. You\'ve faced the Fire Elementals and emerged victorious. Now, the moment of triumph—the reward chest awaits, holding the legendary Nubien Legs.',
        objective: 'Open the reward chest and claim your prize',
        images: ['/images/downloaded/builder-image-2.webp'],
        steps: [
          'Approach the glowing reward chest in the Annihilator\'s chamber',
          'Open the chest with reverence—you\'ve earned this moment',
          'Equip the Nubien Legs and feel the power coursing through your character',
          'Your journey is complete. You are now a legend.'
        ],
        tip: 'The moment you claim the Nubien Legs, you\'ll be teleported back to safety. Your legend will precede you.',
        type: 'step'
      },
      {
        id: 11,
        title: 'Victory and Beyond',
        content: 'Congratulations, warrior! You have conquered the Annihilator\'s inferno and claimed the legendary Nubien Legs. These boots are more than armor—they are a symbol of your courage, skill, and determination. Wear them with pride, knowing you\'ve achieved what few ever accomplish. Your strength has been proven, your legend has been forged. The path to becoming an unstoppable force in Evolisca now opens before you. Use your newfound power wisely, and continue your ascent to greatness!',
        type: 'conclusion'
      }
    ]
  },
  'soul-weapon-quest': {
    title: 'Soul Weapon Quest Guide',
    levelRequirement: 2500,
    difficulty: 'legendary',
    duration: '45-60 minutes',
    partySize: 4,
    reward: 'Soul Weapon',
    description: 'An epic quest involving multiple puzzles, boss fights, and complex mechanics to obtain a powerful soul weapon.',
    sections: [
      {
        id: 1,
        title: 'Soul Weapon Quest: Step-by-Step Guide',
        content: 'This comprehensive guide will walk you through every step of the Soul Weapon Quest, one of Evolisca\'s most challenging and rewarding adventures.',
        type: 'intro'
      },
      {
        id: 2,
        title: 'Required',
        content: 'Minimum 4 players in a party.',
        type: 'requirement',
        icon: '⚠️'
      },
      {
        id: 3,
        title: 'Step 1: Fall Into the Small Room',
        content: 'Move diagonally until you fall into a small room that contains a chest. Be cautious as falling into the room might trigger an event, so ensure your team is prepared.',
        objective: 'Fall into small room with chest',
        tip: 'Ensure your team is prepared before falling',
        type: 'step'
      },
      {
        id: 4,
        title: 'Step 2: Tile Mechanism',
        content: 'In this room, there are 4 tiles with a stone mechanism nearby. All 4 players must stand on these tiles in a specific order to open a wall (MWall).',
        objective: 'Complete the tile sequence',
        steps: [
          'One player needs to walk east down the stairs and levitate up.',
          'At the top, there will be a stone you can click on. This will display 4 names that correspond to the order in which players must stand on the tiles.',
          'Once you know the order, each player must stand on the corresponding tile.',
          'One player needs to click the stone beside the tiles to open the MWall, allowing progression.'
        ],
        type: 'step'
      },
      {
        id: 5,
        title: 'Step 3: Summon the Boss by Watering Trees',
        content: 'Move further into the quest and find 3 trees that need to be watered in order to summon the boss.',
        objective: 'Summon and defeat the boss',
        steps: [
          'Find two buckets and a fountain nearby.',
          'Fill the buckets with water from the fountain.',
          'Water each tree with the filled buckets.',
          'Once the trees are watered, the boss will spawn.',
          'Defeat the boss to obtain a wand.'
        ],
        tip: 'Keep in mind, you\'ll need this wand for later to open other chests.',
        type: 'step'
      },
      {
        id: 6,
        title: 'Step 4: Use the Wand on the Skull',
        content: 'Levitate near a set of benches to find a treasure chest on top of a platform.',
        objective: 'Access the hidden chest',
        steps: [
          'Use the wand obtained from the boss on a skull hanging on the wall.',
          'Once the wand is used, it will allow you to walk on an otherwise empty tile and access the chest.'
        ],
        type: 'step'
      },
      {
        id: 7,
        title: 'Step 5: The Mirror Puzzle',
        content: 'This step requires quick reflexes and precise timing to complete the bouncing attack sequence.',
        objective: 'Complete the mirror bounce sequence',
        steps: [
          'One player must shoot the wand at a skull to start the sequence.',
          'Immediately move away to avoid the attack bouncing back at you.',
          'The attack must bounce off a mirror, then onto a sword hanging on the wall.',
          'Move the sword down quickly to the floor once it has been hit by the attack.',
          'Position the sword to direct the bounce to another MWall, which will clear the way to the chest.'
        ],
        tip: 'Speed is crucial! Practice timing the sword movement.',
        type: 'step'
      },
      {
        id: 8,
        title: 'Step 6: Re-summon the Boss',
        content: 'Return to the area with the 3 trees you watered earlier.',
        objective: 'Get the final helmet piece',
        steps: [
          'Water the trees once more using the buckets and fountain.',
          'This will summon the boss again.',
          'You don\'t need to kill the boss this time. Instead, jump into the grave/teleport that appears after the boss spawns to obtain the final piece of the helmet.'
        ],
        type: 'step'
      },
      {
        id: 9,
        title: 'Step 7: The Sword Puzzle',
        content: 'Retrieve and use the sword that was previously hanging on the wall.',
        objective: 'Use sword to teleport team across',
        steps: [
          'Go to the area where monks are located, and you will find 4 tiles with a stone in the center.',
          'All players must stand on the 4 tiles in the correct arrangement.',
          'One player should throw the sword onto the stone in the center. This will teleport them to another area.',
          'After throwing the sword, it will return to the wall automatically.',
          'A second player can now retrieve the sword and teleport to the other side to assist the rest of the party.'
        ],
        type: 'step'
      },
      {
        id: 10,
        title: 'Step 8: The Clone Fight',
        content: 'Clear a room filled with monsters and then deal with summoned clones.',
        objective: 'Defeat all clones and proceed',
        steps: [
          'Ensure all 4 players are together in the party to clean out the room filled with enemies.',
          'After clearing the room, you will find a teleport. Walk into the teleport, and your clones will appear a few seconds later.',
          'You must kill these clones.',
          'Once all clones are defeated, you and your team will be teleported to the final stage of the quest.'
        ],
        tip: 'The clone stage can be tricky. If you\'re not teleported right away, try several times until everyone is teleported to the next area.',
        type: 'step'
      },
      {
        id: 11,
        title: 'Step 9: Final Helmet Assembly',
        content: 'Assemble the final helmet by placing all 5 helmet pieces correctly.',
        objective: 'Place helmet pieces and access reward room',
        steps: [
          'You will see 5 helmet pieces in front of you.',
          'Arrange them as they are displayed on the stones nearby.',
          'After placing them correctly, a teleport will open up, allowing you to enter the final reward room.',
          'In the reward room, there will be another tile puzzle. One player needs to pass through the middle while the other 3 players stand on the tiles to clear the way.',
          'The goal is to remove the stones blocking the path so the 4th player can also pass through and help others.'
        ],
        type: 'step'
      },
      {
        id: 12,
        title: 'Congratulations!',
        content: 'After completing all these steps, you will have successfully finished the 2500 Soul Weapon Quest! You now possess one of the most powerful weapons in Evolisca. Use it wisely and dominate the battlefield!',
        type: 'conclusion'
      }
    ]
  }
};

export default function QuestDetailPage({ params }) {
  const { questId } = params;
  const quest = questContent[questId];
  const [expandedSteps, setExpandedSteps] = useState({});

  if (!quest) {
    return (
      <main className="page-shell">
        <section className="content-section" style={{ padding: '60px 20px', textAlign: 'center' }}>
          <h1 style={{ color: 'var(--text-muted)', marginBottom: '16px' }}>Quest Not Found</h1>
          <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>The quest you're looking for doesn't exist.</p>
          <Link href="/quests" style={{ color: 'var(--gold)', textDecoration: 'underline', fontWeight: '600' }}>
            ← Back to Quests
          </Link>
        </section>
      </main>
    );
  }

  const toggleStep = (stepId) => {
    setExpandedSteps(prev => ({
      ...prev,
      [stepId]: !prev[stepId]
    }));
  };

  return (
    <main className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      {/* Back Button */}
      <Link href="/quests" style={{ color: 'var(--text)', textDecoration: 'none', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '20px' }}>
        ← Back to Quests
      </Link>

      {/* Hero Section */}
      <section className="hero-grid">
        <div className="hero-copy panel hero-panel">
          <span className="eyebrow">Epic Quest</span>
          <h1>{quest.title}</h1>
          <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '20px' }}>
            {quest.description}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '12px', fontSize: '0.85rem', marginTop: '16px' }}>
            <div>
              <strong style={{ color: 'var(--gold)', display: 'block', fontSize: '1.2rem' }}>Lvl {quest.levelRequirement}+</strong>
              <span style={{ color: 'var(--text-muted)' }}>Required</span>
            </div>
            <div>
              <strong style={{ color: 'var(--gold)', display: 'block', fontSize: '1.2rem' }}>{quest.duration}</strong>
              <span style={{ color: 'var(--text-muted)' }}>Duration</span>
            </div>
            <div>
              <strong style={{ color: 'var(--gold)', display: 'block', fontSize: '1.2rem' }}>{quest.partySize} Players</strong>
              <span style={{ color: 'var(--text-muted)' }}>Party Size</span>
            </div>
            <div>
              <strong style={{ color: '#ff6b6b', display: 'block', fontSize: '1.2rem' }}>{quest.reward}</strong>
              <span style={{ color: 'var(--text-muted)' }}>Reward</span>
            </div>
          </div>
        </div>

        <aside className="panel side-panel">
          <div className="panel-header">
            <span className="eyebrow">Quest Info</span>
            <h2>Quick Stats</h2>
          </div>

          <div style={{ display: 'grid', gap: '12px' }}>
            <div style={{ padding: '12px', borderRadius: '8px', background: 'var(--bg-elevated)', border: '1px solid var(--line)' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase' }}>Type</span>
              <div style={{ color: 'var(--text)', fontWeight: '600', marginTop: '4px' }}>Legendary Quest</div>
            </div>
            <div style={{ padding: '12px', borderRadius: '8px', background: 'var(--bg-elevated)', border: '1px solid var(--line)' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase' }}>Difficulty</span>
              <div style={{ color: 'var(--text)', fontWeight: '700', marginTop: '4px' }}>⭐⭐⭐⭐ Extreme</div>
            </div>
            <div style={{ padding: '12px', borderRadius: '8px', background: 'var(--bg-elevated)', border: '1px solid var(--line)' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase' }}>Reward Tier</span>
              <div style={{ color: 'var(--text)', fontWeight: '700', marginTop: '4px' }}>Legendary Weapon</div>
            </div>
          </div>

          <div style={{ marginTop: '16px', padding: '12px', borderRadius: '8px', background: 'var(--bg-elevated)', border: '1px solid var(--line)' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Steps</span>
            <div style={{ fontSize: '1.3rem', color: 'var(--text)', fontWeight: '700' }}>9 Major Steps</div>
          </div>
        </aside>
      </section>

      {/* Quest Content */}
      <section className="content-section">
        <div style={{ display: 'grid', gap: '24px' }}>
          {quest.sections.map((section) => {
            if (section.type === 'intro') {
              return (
                <div key={section.id} style={{ padding: '20px', borderRadius: '12px', background: 'var(--bg-soft)', border: '1px solid var(--line)' }}>
                  <h2 style={{ margin: '0 0 12px 0', fontSize: '1.3rem', color: 'var(--text)' }}>{section.title}</h2>
                  <p style={{ margin: 0, color: 'var(--text-muted)', lineHeight: '1.6' }}>{section.content}</p>
                </div>
              );
            }

            if (section.type === 'requirement') {
              return (
                <div key={section.id} style={{ padding: '16px', borderRadius: '12px', background: 'var(--bg-soft)', border: '2px solid var(--line-strong)' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'start' }}>
                    <span style={{ fontSize: '1.2rem' }}>{section.icon}</span>
                    <div>
                      <strong style={{ color: 'var(--text)', fontSize: '0.95rem', textTransform: 'uppercase', display: 'block', marginBottom: '4px', letterSpacing: '0.5px' }}>
                        {section.title}
                      </strong>
                      <p style={{ margin: 0, color: 'var(--text-muted)', lineHeight: '1.5' }}>{section.content}</p>
                    </div>
                  </div>
                </div>
              );
            }

            if (section.type === 'step') {
              const isExpanded = expandedSteps[section.id];
              return (
                <div
                  key={section.id}
                  onClick={() => toggleStep(section.id)}
                  style={{
                    padding: '16px',
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
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: '12px' }}>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ margin: '0 0 8px 0', fontSize: '1.1rem', color: 'var(--text)', fontWeight: '700' }}>
                        {section.title}
                      </h3>
                      <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem' }}>{section.content}</p>
                    </div>
                    <span style={{ color: 'var(--text)', fontSize: '1.2rem', fontWeight: '700', minWidth: '24px', textAlign: 'center' }}>
                      {isExpanded ? '−' : '+'}
                    </span>
                  </div>

                  {isExpanded && (
                    <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--line)', display: 'grid', gap: '16px' }}>
                      {section.images && section.images.length > 0 && (
                        <div style={{ display: 'grid', gridTemplateColumns: section.twoColumns ? 'repeat(2, 1fr)' : '1fr', gap: '12px' }}>
                          {section.images.map((image, idx) => (
                            <img
                              key={idx}
                              src={image}
                              alt={`${section.title} - Image ${idx + 1}`}
                              style={{
                                width: '100%',
                                borderRadius: '8px',
                                border: '1px solid var(--line)',
                                maxHeight: '400px',
                                objectFit: 'cover'
                              }}
                            />
                          ))}
                        </div>
                      )}

                      {section.objective && (
                        <div>
                          <span style={{ fontSize: '0.75rem', color: 'var(--text)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Objective</span>
                          <p style={{ margin: '6px 0 0 0', color: 'var(--text)', lineHeight: '1.5' }}>{section.objective}</p>
                        </div>
                      )}

                      {section.steps && (
                        <div>
                          <span style={{ fontSize: '0.75rem', color: 'var(--text)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Steps</span>
                          <ol style={{ margin: '8px 0 0 0', paddingLeft: '20px', color: 'var(--text-muted)' }}>
                            {section.steps.map((step, idx) => (
                              <li key={idx} style={{ marginBottom: '8px', lineHeight: '1.5' }}>{step}</li>
                            ))}
                          </ol>
                        </div>
                      )}

                      {section.tip && (
                        <div style={{ padding: '12px', borderRadius: '8px', background: 'var(--bg-elevated)', border: '1px solid var(--line)' }}>
                          <span style={{ fontSize: '0.75rem', color: 'var(--text)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>💡 Tip</span>
                          <p style={{ margin: '6px 0 0 0', color: 'var(--text-muted)', fontSize: '0.9rem' }}>{section.tip}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            }

            if (section.type === 'conclusion') {
              return (
                <div key={section.id} style={{ padding: '24px', borderRadius: '12px', background: 'var(--bg-soft)', border: '2px solid var(--line-strong)' }}>
                  <h2 style={{ margin: '0 0 12px 0', fontSize: '1.5rem', color: 'var(--text)', textAlign: 'center' }}>🎉 {section.title}</h2>
                  <p style={{ margin: 0, color: 'var(--text)', lineHeight: '1.6', textAlign: 'center', fontSize: '1rem' }}>{section.content}</p>
                </div>
              );
            }

            return null;
          })}
        </div>
      </section>

      {/* Footer */}
      <section className="content-section" style={{ marginTop: '40px', textAlign: 'center', paddingTop: '40px', borderTop: '1px solid var(--line)' }}>
        <div style={{ display: 'grid', gap: '12px' }}>
          <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Need help with this quest? Check back soon for video guides and community tips!
          </p>
          <Link
            href="/quests"
            style={{
              display: 'inline-block',
              padding: '12px 24px',
              borderRadius: '8px',
              background: 'var(--bg-soft)',
              border: '1px solid var(--line)',
              color: 'var(--text)',
              textDecoration: 'none',
              fontWeight: '600',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--bg-elevated)';
              e.currentTarget.style.borderColor = 'var(--line-strong)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--bg-soft)';
              e.currentTarget.style.borderColor = 'var(--line)';
            }}
          >
            ← Back to All Quests
          </Link>
        </div>
      </section>
    </main>
  );
}
