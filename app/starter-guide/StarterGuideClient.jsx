'use client';

import { useState } from 'react';
import './starter-guide.css';

const teleports = [
  {
    id: 'daily-reward',
    name: 'Daily Reward Room',
    icon: '🎁',
    description: 'Challenge yourself in a powerful monster-filled arena to earn massive rewards.',
    details: 'This exclusive solo challenge zone features some of the server\'s most formidable creatures. Victory here yields significant rewards and rare items. Warning: Enter only when prepared with proper equipment and buffs.'
  },
  {
    id: 'hunting',
    name: 'Hunting Grounds',
    icon: '🎯',
    description: 'Diverse spawns with countless hunting tasks and progression opportunities.',
    details: 'The primary hunting zone with multiple creature spawns and tasks from Grizzle Adams. Complete tasks to earn progression points and gain access to boss battles. Great for both leveling and collecting valuable loot.'
  },
  {
    id: 'quests',
    name: 'Quest Room',
    icon: '⚔️',
    description: 'Face dangerous creatures and earn rewards through combat challenges.',
    details: 'A challenging zone filled with formidable enemies. Defeating them grants excellent rewards and valuable experience. Perfect for experienced adventurers looking for substantial loot drops.'
  },
  {
    id: 'trainers',
    name: 'Training Grounds',
    icon: '💪',
    description: 'Gain Stamina at an accelerated rate compared to offline progression.',
    details: 'This dedicated training facility allows you to earn Stamina faster while online. Train your character\'s abilities and prepare for combat challenges ahead. An essential location for character development.'
  }
];

const templeLocations = [
  {
    id: 'daily-reward-room',
    name: 'Daily Reward Room',
    icon: '🎁',
    description: 'A challenging solo arena with powerful monsters and valuable loot.',
    imageUrl: '/images/boss-raid-assets/boss-001daily-reward-room.webp',
    altText: 'Daily Reward Room with powerful monsters and treasure'
  },
  {
    id: 'hunting-grounds',
    name: 'Hunting Grounds',
    icon: '🎯',
    description: 'Prime hunting location with multiple creature spawns and tasks.',
    imageUrl: '/images/boss-raid-assets/boss-001hunting-grounds.webp',
    altText: 'Hunting Grounds with creatures and hunting tasks'
  },
  {
    id: 'quests',
    name: 'Quest Room',
    icon: '⚔️',
    description: 'Dangerous zone filled with challenging creatures.',
    imageUrl: '/images/boss-raid-assets/boss-001quest-room.webp',
    altText: 'Quest Room with enemies and combat challenges'
  },
  {
    id: 'trainers',
    name: 'Training Facility',
    icon: '💪',
    description: 'Accelerated Stamina gain while training online.',
    imageUrl: '/images/boss-raid-assets/boss-001training-facility.webp',
    altText: 'Training Facility for Stamina progression'
  }
];

const npcLocations = [
  {
    id: 'johnny-premium',
    name: 'Johnny (+1 Northeast)',
    icon: '💎',
    description: 'Premium Vendor',
    details: 'Johnny specializes in premium items and exclusive merchandise. Located northeast of the Temple, he offers cosmetics and quality-of-life items for players seeking enhancements.'
  },
  {
    id: 'khlfawy-points',
    name: 'Khlfawy (+1 Southeast)',
    icon: '⏰',
    description: 'Online Time Points Exchange',
    imageUrl: '/images/boss-raid-assets/boss-001npc-khlfawy.webp',
    details: 'Convert your accumulated online time points into premium items. A unique reward system that recognizes your dedication and playtime investment.',
    altText: 'Khlfawy NPC trading online time points for premium items'
  },
  {
    id: 'frodo-tools',
    name: 'Frodo (+1 South)',
    icon: '🔑',
    description: 'Tools & Equipment Merchant',
    details: 'Frodo sells essential hunting tools including the legendary Eye Key! This expensive but invaluable item automatically sells your hunting loot. Note: The Eye Key degrades with use, so maintain multiple copies.'
  },
  {
    id: 'fire-sell',
    name: 'Temple Fire (+1 Center)',
    icon: '🔥',
    description: 'Instant Loot Sale System',
    details: 'Throw items or bags of loot into the sacred fire and they\'ll instantly convert to gold. Your backpack won\'t be consumed, only the items inside. Perfect for quick inventory management during hunts.'
  },
  {
    id: 'reward-chest',
    name: 'Reward Chest (+1 Temple)',
    icon: '📦',
    description: 'Boss Loot Collection Point',
    imageUrl: '/images/boss-raid-assets/boss-001reward-chest.webp',
    details: 'Every player who damages a boss receives loot. Collect your boss rewards here after group battles. Rewards scale based on your damage contribution.',
    altText: 'Reward Chest for collecting boss loot'
  },
  {
    id: 'checkpoint',
    name: 'Checkpoint (+1 Temple)',
    icon: '🚩',
    description: 'Fast Travel Hub',
    imageUrl: '/images/boss-raid-assets/boss-001checkpoint-fast-travel.webp',
    details: 'Activate checkpoints throughout Evolisca for instant fast travel back to this central hub. Significantly reduces travel time between locations and saves you hours of exploration.',
    altText: 'Checkpoint system for fast travel across the world'
  }
];

const worldBosses = [
  {
    id: 'world-bosses',
    name: 'World Boss Raids',
    icon: '👹',
    description: 'Extremely Dangerous Zone East of Temple',
    imageUrl: '/images/boss-raid-assets/boss-001world-boss-raids.webp',
    details: 'The server\'s most powerful bosses roam this dangerous area east of the Temple. These encounters require elite equipment, powerful buffs, and team coordination. Victory brings legendary rewards and prestige.',
    altText: 'World Boss Raids area with powerful boss encounters'
  }
];

const essentialItems = [
  {
    id: 'eye-key',
    name: 'Eye Key',
    icon: '🔑',
    rarity: 'Rare',
    imageUrl: '/images/boss-raid-assets/boss-001eye-key.webp',
    description: 'Sell hunting loot automatically while adventuring.',
    details: 'This invaluable item transforms your hunting experience by instantly converting kills into currency. Highly valuable but degrades over time—keep spares in storage.',
    altText: 'Eye Key item for instant loot selling'
  },
  {
    id: 'strange-mallet',
    name: 'Strange Mallet',
    icon: '🔨',
    rarity: 'Uncommon',
    imageUrl: '/images/boss-raid-assets/boss-001strange-mallet.webp',
    description: 'Essential weapon for slaying Goblins that raid the server.',
    details: 'Goblins periodically invade the server to steal loot. Only this mallet can effectively combat them. Keep it equipped during raids.',
    altText: 'Strange Mallet for goblin raids'
  }
];

const systemFeatures = [
  {
    id: 'charm-system',
    name: 'Charm System',
    icon: '✨',
    imageUrl: '/images/boss-raid-assets/boss-001charm-system.webp',
    description: 'Equip charms to gain significant power boosts.',
    details: 'Charms are special equipment slots that grant powerful bonuses. Collect and equip them to enhance your stats and abilities significantly. Each charm provides unique benefits.',
    altText: 'Charm Bag system for equipping charm items'
  },
  {
    id: 'charm-item-example',
    name: 'Example Charm - Final Judgement',
    icon: '⚡',
    imageUrl: '/images/boss-raid-assets/boss-001charm-final-judgement.webp',
    description: 'Powerful charm providing combat bonuses.',
    details: '+5 Extra weapon attack and +10 Speed for one hour. Charms provide temporary or permanent stat boosts depending on their type.',
    altText: 'Final Judgement charm item with bonus stats'
  },
  {
    id: 'waypoint-system',
    name: 'Waypoint System',
    icon: '🗺️',
    imageUrl: '/images/boss-raid-assets/boss-001waypoint-system.webp',
    description: 'Fast travel between discovered checkpoints.',
    details: 'Activate checkpoints as you explore. These waypoints create a fast travel network across Evolisca, saving you countless hours of navigation.',
    altText: 'Waypoint and checkpoint locations on the map'
  },
  {
    id: 'talent-system',
    name: 'Talent System',
    icon: '🏆',
    imageUrl: '/images/boss-raid-assets/boss-001talent-system.webp',
    description: 'Earn talents from various in-game achievements.',
    details: 'Unlock talents by defeating bosses, completing quests, unlocking mounts/outfits/auras, and finding random NPCs in spawns. Access talents via the dropdown menu below the logout button.',
    altText: 'Talent trainers and talent progression system'
  }
];

const progressionPaths = [
  {
    id: 'task-system',
    name: 'Task System',
    icon: '📋',
    imageUrl: '/images/boss-raid-assets/boss-001task-system.webp',
    description: 'Grizzly Adams in the Hunting Ground assigns progression tasks.',
    details: 'Complete tasks to earn progression points. These points unlock access to boss battles and provide valuable rewards. Make sure to loot bosses after defeating them for additional drops.',
    altText: 'NPC task system for progression'
  },
  {
    id: 'first-promotion',
    name: 'First Promotion Quest',
    icon: '👑',
    imageUrl: '/images/boss-raid-assets/boss-001lady-menna-promotion.webp',
    description: 'Lady Menna guides your first major promotion.',
    details: 'Visit Lady Menna to receive promotion tasks. Completing these quests grants your first promotion, a significant milestone in your Evolisca journey.',
    altText: 'Lady Menna NPC for first promotion quest'
  },
  {
    id: 'npc-tasks',
    name: 'Random NPC Tasks',
    icon: '🎯',
    imageUrl: '/images/boss-raid-assets/boss-001task-system.webp',
    description: 'Discover NPCs throughout spawns for talent tasks.',
    details: 'Random NPCs scattered in creature spawns offer tasks that reward talents. Finding and completing these tasks is crucial for talent progression and character development.',
    altText: 'NPC tasks for earning talents'
  }
];

export default function StarterGuideClient() {
  const [expandedSection, setExpandedSection] = useState('teleports');

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <main className="page-shell starter-guide-page">
      <section className="guide-hero">
        <h1>Starter Guide</h1>
        <p className="hero-subtitle">
          Your complete introduction to Evolisca. Everything you need to know to begin your adventure.
        </p>
      </section>

      <section className="guide-intro">
        <div className="intro-content">
          <h2>Welcome to Evolisca</h2>
          <p>
            Congratulations on joining our vibrant community! This comprehensive guide will familiarize you with essential locations, NPCs, systems, and mechanics you'll encounter. From your first steps in the Temple to facing world bosses, everything you need to succeed is right here.
          </p>
        </div>
      </section>

      <section className="teleports-section">
        <h2>Main Teleportation Points</h2>
        <p className="section-subtitle">
          Four essential destinations accessible from the Temple's central hub
        </p>
        <div className="teleports-grid">
          {teleports.map((teleport) => (
            <div key={teleport.id} className="teleport-card">
              <div className="teleport-icon">{teleport.icon}</div>
              <h3>{teleport.name}</h3>
              <p className="teleport-description">{teleport.description}</p>
              <details className="teleport-details">
                <summary>Learn More</summary>
                <p>{teleport.details}</p>
              </details>
            </div>
          ))}
        </div>
      </section>

      <section className="main-locations-section">
        <h2>Teleport Destinations Overview</h2>
        <p className="section-subtitle">Visual reference for each main teleport location</p>
        <div className="locations-grid">
          {templeLocations.map((location) => (
            <div key={location.id} className="location-card">
              <img
                src={location.imageUrl}
                alt={location.altText}
                className="location-image"
                loading="lazy"
              />
              <div className="location-info">
                <h3>{location.name}</h3>
                <p>{location.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="temple-npcs-section">
        <h2>Temple NPCs & Facilities</h2>
        <p className="section-subtitle">Explore key NPCs and features around the central Temple</p>
        
        <div className="npcs-container">
          {npcLocations.map((npc) => (
            <div key={npc.id} className="npc-card">
              <div className="npc-header">
                <span className="npc-icon">{npc.icon}</span>
                <div className="npc-title-section">
                  <h3>{npc.name}</h3>
                  <p className="npc-role">{npc.description}</p>
                </div>
              </div>
              <p className="npc-details">{npc.details}</p>
              {npc.imageUrl && (
                <img
                  src={npc.imageUrl}
                  alt={npc.altText}
                  className="npc-image"
                  loading="lazy"
                />
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="world-bosses-section">
        <div className="world-boss-card">
          <div className="boss-header">
            <span className="boss-icon">{worldBosses[0].icon}</span>
            <div>
              <h2>{worldBosses[0].name}</h2>
              <p className="boss-subtitle">{worldBosses[0].description}</p>
            </div>
          </div>
          <p className="boss-details">{worldBosses[0].details}</p>
          <img
            src={worldBosses[0].imageUrl}
            alt={worldBosses[0].altText}
            className="boss-image"
            loading="lazy"
          />
        </div>
      </section>

      <section className="essential-items-section">
        <h2>Essential Items You Must Know</h2>
        <p className="section-subtitle">Powerful tools to enhance your hunting and survival</p>
        <div className="items-grid">
          {essentialItems.map((item) => (
            <div key={item.id} className="item-card">
              <div className="item-header">
                <span className="item-icon">{item.icon}</span>
                <div>
                  <h3>{item.name}</h3>
                  <span className={`item-rarity rarity-${item.rarity.toLowerCase()}`}>
                    {item.rarity}
                  </span>
                </div>
              </div>
              <p className="item-description">{item.description}</p>
              <p className="item-details">{item.details}</p>
              <img
                src={item.imageUrl}
                alt={item.altText}
                className="item-image"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="systems-section">
        <h2>Key Game Systems</h2>
        <p className="section-subtitle">Core mechanics that define your progression</p>
        <div className="systems-grid">
          {systemFeatures.map((system) => (
            <div key={system.id} className="system-card">
              <h3>{system.name}</h3>
              <p className="system-description">{system.description}</p>
              <img
                src={system.imageUrl}
                alt={system.altText}
                className="system-image"
                loading="lazy"
              />
              <p className="system-details">{system.details}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="progression-section">
        <h2>Progression Pathways</h2>
        <p className="section-subtitle">Multiple routes to growth and achievement</p>
        <div className="progression-grid">
          {progressionPaths.map((path) => (
            <div key={path.id} className="progression-card">
              <div className="progression-header">
                <span className="progression-icon">{path.icon}</span>
                <h3>{path.name}</h3>
              </div>
              <p className="progression-description">{path.description}</p>
              <img
                src={path.imageUrl}
                alt={path.altText}
                className="progression-image"
                loading="lazy"
              />
              <p className="progression-details">{path.details}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="economy-section">
        <h2>Player Economy & Trading</h2>
        <div className="economy-content">
          <div className="economy-feature">
            <h3>🏪 In-Game Store</h3>
            <p>
              Access the ingame Store through the dropdown menu below the logout box on your client. Purchase powerful items using Star Coins and Gold Nuggets to accelerate your progression and unlock exclusive gear.
            </p>
          </div>
          <div className="economy-feature">
            <h3>💰 Player Marketplace</h3>
            <p>
              Trade items directly with other players through the marketplace accessible from the same dropdown menu. Right-click any item in your inventory and select "Add to Market" to list it for sale. This player-to-player economy creates endless trading opportunities and allows you to profit from your discoveries.
            </p>
          </div>
        </div>
      </section>

      <section className="quick-tips">
        <h2>Quick Tips for Success</h2>
        <ul className="tips-list">
          <li><strong>Start with Hunting:</strong> Visit the hunting grounds and complete tasks from Grizzle Adams to unlock boss access.</li>
          <li><strong>Secure Your Tools:</strong> Purchase an Eye Key from Frodo early to streamline your loot collection while hunting.</li>
          <li><strong>Equip Charms:</strong> Find and equip charms to significantly boost your combat effectiveness.</li>
          <li><strong>Activate Waypoints:</strong> Search for and activate checkpoints throughout the world to create a fast travel network.</li>
          <li><strong>Join the Talent System:</strong> Earn talents through quests, boss defeats, and random NPC tasks to build long-term power.</li>
          <li><strong>Use the Fire Sell:</strong> Throw hunting loot into the Temple fire for instant gold conversion when inventory is full.</li>
          <li><strong>Prepare for Promotions:</strong> Visit Lady Menna to unlock your first promotion through dedicated quest chains.</li>
          <li><strong>Explore Spawn NPCs:</strong> Random NPCs in creature spawns offer valuable talent-earning tasks—don't miss them!</li>
          <li><strong>Join Boss Raids:</strong> Damage world bosses to claim rewards from the reward chest, even in group encounters.</li>
          <li><strong>Trade Wisely:</strong> Use the marketplace to buy essential items and sell your unique finds for profit.</li>
        </ul>
      </section>

      <section className="next-steps">
        <h2>Your Next Steps</h2>
        <div className="next-steps-grid">
          <div className="step-box">
            <h3>1. Get Equipped</h3>
            <p>Gather basic gear and purchase essential tools like the Eye Key from Frodo.</p>
          </div>
          <div className="step-box">
            <h3>2. Complete Tasks</h3>
            <p>Head to the Hunting Grounds and start completing Grizzle Adams' tasks.</p>
          </div>
          <div className="step-box">
            <h3>3. Earn Promotion</h3>
            <p>Visit Lady Menna and complete promotion quests for your first major achievement.</p>
          </div>
          <div className="step-box">
            <h3>4. Explore & Grow</h3>
            <p>Hunt, find talents, discover NPCs, and progressively unlock stronger content.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
