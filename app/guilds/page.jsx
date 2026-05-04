'use client';

import { useState } from 'react';
import Link from 'next/link';
import './guilds.css';
import { Users, Flame, Trophy, Shield, MapPin, Clock } from 'lucide-react';

export default function GuildsPage() {
  const [selectedGuild, setSelectedGuild] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  const guildBenefits = [
    {
      id: 1,
      title: 'Strength in Numbers',
      description: 'Unite with fellow warriors to tackle harder content, raid dungeons, and claim territories together. A guild is your army in the eternal war.',
      icon: Users,
    },
    {
      id: 2,
      title: 'Team Warfare',
      description: 'Engage in epic guild wars and territorial battles. Test your squad\'s coordination, strategy, and combat prowess against rival guilds for glory and dominion.',
      icon: Flame,
    },
    {
      id: 3,
      title: 'Ranking & Prestige',
      description: 'Climb the guild rankings through victories, territorial control, and member activity. Build a legendary guild legacy that echoes across the realm.',
      icon: Trophy,
    },
    {
      id: 4,
      title: 'Shared Resources',
      description: 'Access guild vaults, shared equipment, and collective wealth. Pool your resources with allies to accelerate progression and dominate as one.',
      icon: Shield,
    },
  ];

  const guildRanks = [
    {
      rank: 'Guild Master',
      description: 'The supreme leader. Commands the guild, declares wars, manages members, and steers the faction toward victory.',
      duties: ['Lead strategic decisions', 'Manage guild treasury', 'Declare wars & alliances', 'Manage ranks'],
    },
    {
      rank: 'War Captain',
      description: 'Battle strategist and tactical commander. Coordinates large-scale conflicts and leads your forces into glorious combat.',
      duties: ['Organize raids', 'Plan battle strategies', 'Lead guild wars', 'Recruit elite fighters'],
    },
    {
      rank: 'Officer',
      description: 'The guild\'s pillars of strength. Handle recruitment, training, disputes, and day-to-day management to keep the machine running.',
      duties: ['Recruit members', 'Manage disputes', 'Train recruits', 'Maintain discipline'],
    },
    {
      rank: 'Elite Member',
      description: 'Proven warriors and trusted allies. Expected to uphold guild honor, mentor newer members, and lead by example in combat.',
      duties: ['Participate in wars', 'Mentor members', 'Defend territory', 'Maintain honor'],
    },
    {
      rank: 'Member',
      description: 'Full-fledged guild warriors. Participate in collective activities, grow stronger together, and contribute to guild prestige.',
      duties: ['Attend guild events', 'Participate in raids', 'Support allies', 'Grow stronger'],
    },
    {
      rank: 'Recruit',
      description: 'The newest additions to your ranks. Proving their worth and learning the guild\'s ways before ascending to true membership.',
      duties: ['Complete trials', 'Learn guild lore', 'Prove dedication', 'Follow orders'],
    },
  ];

  const teamDynamics = [
    {
      aspect: 'Trust & Loyalty',
      content: 'A guild thrives when members trust one another. Trust is built through consistent participation, honoring commitments, and standing by your allies in the heat of battle. Betray that trust, and you\'re cast out into the wilderness alone.',
    },
    {
      aspect: 'Specialization & Roles',
      content: 'Every warrior brings unique skills to the table. Some are tanks—unbreakable walls of steel. Others are damage dealers—swift, devastating strikers. Healers mend the wounded. Strategists read the battlefield. A balanced team exploits these specialties for overwhelming advantage.',
    },
    {
      aspect: 'Communication & Tactics',
      content: 'Victory is won before swords are drawn. Guilds that communicate effectively, share intelligence, and execute coordinated tactics overcome stronger individual fighters. Discord is death; coordination is glory.',
    },
    {
      aspect: 'Mentorship & Growth',
      content: 'The greatest guilds elevate their members. Experienced fighters teach the young. Veterans share strategies. Resources are pooled to help brothers and sisters progress faster. A rising tide lifts all boats.',
    },
  ];

  const warMechanics = [
    {
      title: 'Territorial Control',
      description: 'Guilds battle for control of key territories across the realm. Hold land to gain resources, prestige, and strategic advantage over rivals.',
      mechanics: ['Declare sieges', 'Hold castles', 'Gain resources', 'Block enemy advances'],
    },
    {
      title: 'Guild Wars',
      description: 'Organized large-scale conflicts where guilds commit members to all-out warfare. Victory requires strategy, skill, and unwavering coordination.',
      mechanics: ['Guild vs Guild combat', 'Squad tactics', 'Alliance dynamics', 'Honor & glory rewards'],
    },
    {
      title: 'Raids & Dungeons',
      description: 'Tackle the realm\'s most dangerous challenges as a unified force. Defeat legendary bosses, claim legendary loot, and etch your names into history.',
      mechanics: ['Boss encounters', 'Loot distribution', 'Member contribution', 'Progress tracking'],
    },
    {
      title: 'Skill & Strategy',
      description: 'Dominance comes from raw player skill combined with smart tactics. The best guilds study their enemies, refine rotations, and adapt to overcome any challenge.',
      mechanics: ['Ability synergies', 'Enemy patterns', 'Tactical positioning', 'Adaptive strategies'],
    },
  ];

  return (
    <main className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      {/* Hero Section */}
      <section className="hero-grid">
        <div className="hero-copy panel hero-panel">
          <span className="eyebrow">Community & Conquest</span>
          <h1>Guilds & Teams</h1>
          <p>
            In Evolisca, a lone warrior is merely a casualty waiting to happen. Guilds are where legends are forged.
            They are brotherhood, strategy, and the collective will of players united for glory, conquest, and eternal victory.
          </p>
          <div className="hero-actions">
            <a href="https://evolisca.com/guilds" target="_blank" rel="noreferrer" className="button-primary">
              View Guild Rankings
            </a>
            <a href="https://evolisca.com" target="_blank" rel="noreferrer" className="button-secondary">
              Official Site
            </a>
          </div>
        </div>

        <aside className="panel side-panel">
          <div className="panel-header">
            <span className="eyebrow">Guild Essentials</span>
            <h2>Key Facts</h2>
          </div>
          <div className="side-content">
            <div className="fact-item">
              <div className="fact-label">Minimum Level</div>
              <div className="fact-value">Level 200</div>
            </div>
            <div className="fact-item">
              <div className="fact-label">Guild Creation</div>
              <div className="fact-value">Via Website</div>
            </div>
            <div className="fact-item">
              <div className="fact-label">Max Members</div>
              <div className="fact-value">Unlimited*</div>
            </div>
            <div className="fact-item">
              <div className="fact-label">Core Mechanic</div>
              <div className="fact-value">War & Raids</div>
            </div>
          </div>
        </aside>
      </section>

      {/* Benefits Section */}
      <section className="content-section">
        <div className="section-header">
          <h2>Why Join a Guild?</h2>
          <p>Guilds are not optional for those seeking greatness. They are the engine of progress.</p>
        </div>
        <div className="benefits-grid">
          {guildBenefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div key={benefit.id} className="benefit-card panel">
                <div className="benefit-icon">
                  <Icon className="icon" />
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Guild Ranks Section */}
      <section className="content-section">
        <div className="section-header">
          <h2>Guild Hierarchy</h2>
          <p>Understanding guild ranks and responsibilities—from recruits to legendary leaders.</p>
        </div>
        <div className="ranks-container">
          {guildRanks.map((rankInfo, idx) => (
            <div
              key={idx}
              className={`rank-card panel ${selectedGuild === idx ? 'expanded' : ''}`}
              onClick={() => setSelectedGuild(selectedGuild === idx ? null : idx)}
            >
              <div className="rank-header">
                <div>
                  <h3>{rankInfo.rank}</h3>
                  <p className="rank-desc">{rankInfo.description}</p>
                </div>
                <div className="rank-level">
                  <div className="rank-badge">{idx + 1}</div>
                </div>
              </div>
              {selectedGuild === idx && (
                <div className="rank-duties">
                  <div className="duties-label">Key Duties</div>
                  <ul className="duties-list">
                    {rankInfo.duties.map((duty, i) => (
                      <li key={i}>{duty}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Team Dynamics Section */}
      <section className="content-section">
        <div className="section-header">
          <h2>The Essence of Team Dynamics</h2>
          <p>A guild is more than players in the same faction—it's a carefully balanced system of trust, specialization, and shared purpose.</p>
        </div>
        <div className="dynamics-grid">
          {teamDynamics.map((dynamic, idx) => (
            <div key={idx} className="dynamic-card panel">
              <h3>{dynamic.aspect}</h3>
              <p>{dynamic.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* War Mechanics Section */}
      <section className="content-section">
        <div className="section-header">
          <h2>Guild Warfare & Conflict</h2>
          <p>The true test of a guild: coordinated, strategic, all-out war for dominion and honor.</p>
        </div>
        <div className="war-mechanics-grid">
          {warMechanics.map((mechanic, idx) => (
            <div key={idx} className="war-card panel">
              <h3>{mechanic.title}</h3>
              <p>{mechanic.description}</p>
              <div className="mechanic-details">
                <ul>
                  {mechanic.mechanics.map((m, i) => (
                    <li key={i}>
                      <span className="check">✦</span> {m}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Guild Life Section */}
      <section className="content-section">
        <div className="section-header">
          <h2>Building Your Guild Empire</h2>
          <p>From humble beginnings to legendary status—the journey of a guild is defined by its people and purpose.</p>
        </div>
        <div className="guild-tips panel">
          <div className="tips-grid">
            <div className="tip">
              <div className="tip-number">01</div>
              <h3>Start With Core Players</h3>
              <p>
                Found your guild with dedicated members who share your vision. Quality over quantity—
                a tight-knit group of skilled, committed fighters beats a sprawling faction of casuals every time.
              </p>
            </div>
            <div className="tip">
              <div className="tip-number">02</div>
              <h3>Define Your Identity</h3>
              <p>
                Is your guild a war machine? A peaceful collective? PvE focused? Whatever your purpose,
                make it clear. Your identity attracts like-minded warriors and shapes guild culture.
              </p>
            </div>
            <div className="tip">
              <div className="tip-number">03</div>
              <h3>Invest in Leadership</h3>
              <p>
                The guild master is the beating heart. Officers are the blood vessels. Invest in leadership,
                delegate authority, and ensure your structure can scale as you grow stronger.
              </p>
            </div>
            <div className="tip">
              <div className="tip-number">04</div>
              <h3>Foster Competition & Camaraderie</h3>
              <p>
                Push members to excel through competitions, challenges, and shared goals.
                But never let competition fracture your bonds. A guild divided falls together.
              </p>
            </div>
            <div className="tip">
              <div className="tip-number">05</div>
              <h3>Claim Territory & Legacy</h3>
              <p>
                Dominate dungeons, hold castles, and etch your guild name into the world. Legacy is not given—
                it is carved through countless victories and the unyielding will to conquer.
              </p>
            </div>
            <div className="tip">
              <div className="tip-number">06</div>
              <h3>Mentorship Pipeline</h3>
              <p>
                Cultivate talent within your ranks. A new recruit today might be your guild master tomorrow.
                The greatest guilds never stop growing, learning, and evolving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="content-section">
        <div className="cta-panel panel">
          <div className="cta-content">
            <h2>Ready to Join the Ranks?</h2>
            <p>
              Whether you seek to build an empire or fight under legendary banners, your destiny awaits.
              The guilds of Evolisca hunger for warriors who crave glory, strategy, and the thrill of war.
            </p>
            <div className="cta-actions">
              <a href="https://evolisca.com" target="_blank" rel="noreferrer" className="button-primary">
                Join or Create a Guild
              </a>
              <Link href="/pvp" className="button-secondary">
                Explore PvP System
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
