'use client';

import { Shield } from 'lucide-react';
import './equipment-set-bonuses.css';

const equipmentSets = [
  {
    name: 'Bloodforge Set',
    image: '/images/boss-raid-assets/boss-001.webp',
    obtainedFrom: 'Hydra Raids ( "Tawarthion" Boss )',
    requiredLevel: 1400,
    bonuses: ['+10% Critical Chance'],
    color: '#ef4444',
    tierLabel: 'Advanced Warrior',
  },
  {
    name: 'Forsaken Set',
    image: '/images/boss-raid-assets/boss-001.webp',
    obtainedFrom: 'Azure Dragon Raids ( "Blizzardbane" Boss )',
    requiredLevel: 1800,
    bonuses: ['+5% Critical Chance', '+5% Damage Increase'],
    color: '#06b6d4',
    tierLabel: 'Elite Guardian',
  },
  {
    name: 'Soul Set',
    image: '/images/boss-raid-assets/boss-001.webp',
    obtainedFrom: 'Crafted via the Crafting System',
    requiredLevel: 1100,
    bonuses: ['+10% Damage Increase'],
    color: '#a855f7',
    tierLabel: 'Master Artificer',
  },
  {
    name: 'High-Level Set',
    image: '/images/boss-raid-assets/boss-001.webp',
    obtainedFrom: 'Looted from Weekly and World Bosses',
    requiredLevel: 3500,
    bonuses: ['+10% Damage Increase', '+10% Critical Chance'],
    color: '#f97316',
    tierLabel: 'Legendary Legend',
  },
];

export default function EquipmentSetBonusesPage() {
  return (
    <main className="page-shell">
      {/* Header Section */}
      <header className="page-header equipment-hero">
        <div className="hero-icon-container">
          <Shield size={80} />
        </div>
        <h1>Equipment Sets</h1>
        <p>
          Discover legendary combat gear forged in battle. Complete equipment sets grant exclusive bonuses 
          and enhanced combat capabilities. Master the art of gear synergy to unlock unparalleled power.
        </p>
      </header>

      {/* Info Panel */}
      <div className="info-panel">
        <h3>⚔️ Arsenal Mastery</h3>
        <p>
          Equipment sets are specially curated combinations of gear that work together to provide powerful bonuses.
          When you equip a complete set, you unlock unique stat increases and enhanced combat capabilities.
        </p>
        <p>
          Different sets cater to different combat roles and level requirements. Obtain them from dangerous raids,
          expert crafting, and challenging boss encounters. Each set escalates in power and prestige as you progress.
        </p>
      </div>

      {/* Bonus Mechanism Note */}
      <div className="bonus-work-note">
        <h3>⚙️ How Set Bonuses Work</h3>
        <p>
          Set bonuses are activated when you equip the core armor pieces from the same set: <strong>helmet, armor, legs, and boots</strong>. These four pieces work together to grant the listed set bonuses.
        </p>
        <p>
          Additional tier-matched shield and weapon pieces stack <strong>on top of the set bonuses</strong>, providing even greater combat effectiveness. This allows you to maximize your combat potential by equipping the complete arsenal from a single set.
        </p>
      </div>

      {/* Equipment Sets Grid */}
      <div className="equipment-sets-grid">
        {equipmentSets.map((set, idx) => (
          <div
            key={idx}
            className="equipment-set-card"
          >
            {/* Image Section */}
            <div className="equipment-set-image">
              <img
                src={set.image}
                alt={set.name}
              />
            </div>

            {/* Info Section */}
            <div className="equipment-set-content">
              <div className="set-header">
                <span className="set-tier">{set.tierLabel}</span>
                <h3 className="set-title">{set.name}</h3>
              </div>

              <div className="set-stat">
                <span className="set-stat-label">How to Obtain</span>
                <p className="set-stat-value">{set.obtainedFrom}</p>
              </div>

              <div className="set-stat">
                <span className="set-stat-label">Required Level</span>
                <p className="set-stat-value">{set.requiredLevel}+</p>
              </div>

              <div className="set-bonuses">
                <span className="set-bonuses-label">Set Bonuses</span>
                <ul className="set-bonuses-list">
                  {set.bonuses.map((bonus, bidx) => (
                    <li key={bidx}>{bonus}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Set Comparison Section */}
      <div className="comparison-section">
        <h2 className="section-title">Combat Arsenal Comparison</h2>
        <div className="comparison-table-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Set Name</th>
                <th>Required Level</th>
                <th>Obtained From</th>
                <th>Bonuses</th>
              </tr>
            </thead>
            <tbody>
              {equipmentSets.map((set, idx) => (
                <tr key={idx}>
                  <td className="set-name-cell">
                    {set.name}
                  </td>
                  <td>{set.requiredLevel}+</td>
                  <td>{set.obtainedFrom.replace(/\s*\(\s*"[^"]*"\s*\)/g, '')}</td>
                  <td>
                    <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      {set.bonuses.map((bonus, bidx) => (
                        <li key={bidx} className="bonus-value">
                          {bonus}
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Tips Section */}
      <div className="tips-panel">
        <h3>⚔️ Warrior's Strategic Guide</h3>
        <ul className="tips-list">
          <li>Always prioritize sets that align with your combat role and character level</li>
          <li>Complete sets provide significant stat bonuses—aim for full set completion</li>
          <li>Higher-tier sets require preparation, strategy, and dedicated farming efforts</li>
          <li>Multiple sources offer the same sets—choose the path that suits your playstyle</li>
          <li>Equip sets progressively as you level to maintain peak combat effectiveness</li>
          <li>Combine set bonuses with other gear choices for devastating combat synergy</li>
          <li>Check your inventory regularly for partial sets and work towards completion</li>
        </ul>
      </div>
    </main>
  );
}
