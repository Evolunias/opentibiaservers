'use client';

import { useState } from 'react';
import { Plus, X } from 'lucide-react';
import './VocationCreator.css';

export default function VocationCreator({ onVocationCreate }) {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    // Basic Info
    name: '',
    description: '',
    fromvoc: '',
    needpremium: 0,
    lessloss: '',
    
    // Gain Stats
    gaincap: 5,
    gainhp: 5,
    gainmana: 5,
    gainhpticks: 6,
    gainhpamount: 1,
    gainmanaticks: 6,
    gainmanaamount: 2,
    
    // Multipliers & Soul
    manamultiplier: 1.0,
    attackspeed: 1000,
    soulmax: 100,
    gainsoulamount: 1,
    gainsoulticks: 120,
    
    // Formula
    formulaMeleeDamage: 1.0,
    formulaDistDamage: 1.0,
    formulaWandDamage: 1.0,
    formulaMagDamage: 1.0,
    formulaMagHealingDamage: 1.0,
    formulaDefense: 1.0,
    formulaMagDefense: 1.0,
    formulaArmor: 1.0,
    
    // Skills
    skillFist: 1.5,
    skillClub: 2.0,
    skillSword: 2.0,
    skillAxe: 2.0,
    skillDistance: 2.0,
    skillShielding: 1.5,
    skillFishing: 1.1,
    skillExperience: 1.0
  });

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? parseFloat(value) || 0 : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onVocationCreate) {
      onVocationCreate(formData);
    }
    setFormData({
      name: '', description: '', fromvoc: '', needpremium: 0, lessloss: '',
      gaincap: 5, gainhp: 5, gainmana: 5, gainhpticks: 6, gainhpamount: 1,
      gainmanaticks: 6, gainmanaamount: 2, manamultiplier: 1.0, attackspeed: 1000,
      soulmax: 100, gainsoulamount: 1, gainsoulticks: 120,
      formulaMeleeDamage: 1.0, formulaDistDamage: 1.0, formulaWandDamage: 1.0,
      formulaMagDamage: 1.0, formulaMagHealingDamage: 1.0, formulaDefense: 1.0,
      formulaMagDefense: 1.0, formulaArmor: 1.0,
      skillFist: 1.5, skillClub: 2.0, skillSword: 2.0, skillAxe: 2.0,
      skillDistance: 2.0, skillShielding: 1.5, skillFishing: 1.1, skillExperience: 1.0
    });
    setShowForm(false);
  };

  return (
    <section className="vocation-creator-section">
      {!showForm ? (
        <div className="creator-toggle panel">
          <button 
            className="creator-btn"
            onClick={() => setShowForm(true)}
          >
            <Plus size={20} />
            Create New Vocation
          </button>
        </div>
      ) : (
        <div className="creator-form-container panel">
          <div className="form-header">
            <h3>Create New Vocation</h3>
            <button 
              className="close-btn"
              onClick={() => setShowForm(false)}
            >
              <X size={24} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="vocation-form">
            {/* Basic Information */}
            <fieldset className="form-section">
              <legend>Basic Information</legend>
              <div className="input-group">
                <label>Vocation Name *</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., Wizard"
                />
              </div>
              
              <div className="input-group">
                <label>Description</label>
                <textarea 
                  name="description" 
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Describe the vocation"
                  rows={2}
                />
              </div>

              <div className="input-row">
                <div className="input-group">
                  <label>From Vocation</label>
                  <input 
                    type="number" 
                    name="fromvoc" 
                    value={formData.fromvoc}
                    onChange={handleInputChange}
                    min="0"
                  />
                </div>
                <div className="input-group">
                  <label>Experience Loss Reduction (%)</label>
                  <input 
                    type="number" 
                    name="lessloss" 
                    value={formData.lessloss}
                    onChange={handleInputChange}
                    min="0"
                    max="100"
                  />
                </div>
              </div>
            </fieldset>

            {/* Gain Stats */}
            <fieldset className="form-section">
              <legend>Gain Stats (per level)</legend>
              <div className="input-row">
                <div className="input-group">
                  <label>Capacity Gain</label>
                  <input 
                    type="number" 
                    name="gaincap" 
                    value={formData.gaincap}
                    onChange={handleInputChange}
                    step="0.1"
                  />
                </div>
                <div className="input-group">
                  <label>HP Gain</label>
                  <input 
                    type="number" 
                    name="gainhp" 
                    value={formData.gainhp}
                    onChange={handleInputChange}
                    step="0.1"
                  />
                </div>
                <div className="input-group">
                  <label>Mana Gain</label>
                  <input 
                    type="number" 
                    name="gainmana" 
                    value={formData.gainmana}
                    onChange={handleInputChange}
                    step="0.1"
                  />
                </div>
              </div>

              <div className="input-row">
                <div className="input-group">
                  <label>HP Regen Ticks (s)</label>
                  <input 
                    type="number" 
                    name="gainhpticks" 
                    value={formData.gainhpticks}
                    onChange={handleInputChange}
                    step="0.1"
                  />
                </div>
                <div className="input-group">
                  <label>HP per Tick</label>
                  <input 
                    type="number" 
                    name="gainhpamount" 
                    value={formData.gainhpamount}
                    onChange={handleInputChange}
                    step="0.1"
                  />
                </div>
                <div className="input-group">
                  <label>Mana Regen Ticks (s)</label>
                  <input 
                    type="number" 
                    name="gainmanaticks" 
                    value={formData.gainmanaticks}
                    onChange={handleInputChange}
                    step="0.1"
                  />
                </div>
              </div>

              <div className="input-row">
                <div className="input-group">
                  <label>Mana per Tick</label>
                  <input 
                    type="number" 
                    name="gainmanaamount" 
                    value={formData.gainmanaamount}
                    onChange={handleInputChange}
                    step="0.1"
                  />
                </div>
                <div className="input-group">
                  <label>Soul Max</label>
                  <input 
                    type="number" 
                    name="soulmax" 
                    value={formData.soulmax}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="input-group">
                  <label>Soul Gain Amount</label>
                  <input 
                    type="number" 
                    name="gainsoulamount" 
                    value={formData.gainsoulamount}
                    onChange={handleInputChange}
                    step="0.1"
                  />
                </div>
              </div>

              <div className="input-row">
                <div className="input-group">
                  <label>Soul Tick (s)</label>
                  <input 
                    type="number" 
                    name="gainsoulticks" 
                    value={formData.gainsoulticks}
                    onChange={handleInputChange}
                    step="0.1"
                  />
                </div>
              </div>
            </fieldset>

            {/* Multipliers */}
            <fieldset className="form-section">
              <legend>Multipliers</legend>
              <div className="input-row">
                <div className="input-group">
                  <label>Mana Multiplier</label>
                  <input 
                    type="number" 
                    name="manamultiplier" 
                    value={formData.manamultiplier}
                    onChange={handleInputChange}
                    step="0.1"
                  />
                </div>
                <div className="input-group">
                  <label>Attack Speed (ms)</label>
                  <input 
                    type="number" 
                    name="attackspeed" 
                    value={formData.attackspeed}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </fieldset>

            {/* Damage Formulas */}
            <fieldset className="form-section">
              <legend>Damage Formulas</legend>
              <div className="input-row">
                <div className="input-group">
                  <label>Melee Damage</label>
                  <input 
                    type="number" 
                    name="formulaMeleeDamage" 
                    value={formData.formulaMeleeDamage}
                    onChange={handleInputChange}
                    step="0.1"
                  />
                </div>
                <div className="input-group">
                  <label>Distance Damage</label>
                  <input 
                    type="number" 
                    name="formulaDistDamage" 
                    value={formData.formulaDistDamage}
                    onChange={handleInputChange}
                    step="0.1"
                  />
                </div>
                <div className="input-group">
                  <label>Wand Damage</label>
                  <input 
                    type="number" 
                    name="formulaWandDamage" 
                    value={formData.formulaWandDamage}
                    onChange={handleInputChange}
                    step="0.1"
                  />
                </div>
              </div>

              <div className="input-row">
                <div className="input-group">
                  <label>Magic Damage</label>
                  <input 
                    type="number" 
                    name="formulaMagDamage" 
                    value={formData.formulaMagDamage}
                    onChange={handleInputChange}
                    step="0.1"
                  />
                </div>
                <div className="input-group">
                  <label>Magic Healing</label>
                  <input 
                    type="number" 
                    name="formulaMagHealingDamage" 
                    value={formData.formulaMagHealingDamage}
                    onChange={handleInputChange}
                    step="0.1"
                  />
                </div>
                <div className="input-group">
                  <label>Defense</label>
                  <input 
                    type="number" 
                    name="formulaDefense" 
                    value={formData.formulaDefense}
                    onChange={handleInputChange}
                    step="0.1"
                  />
                </div>
              </div>

              <div className="input-row">
                <div className="input-group">
                  <label>Magic Defense</label>
                  <input 
                    type="number" 
                    name="formulaMagDefense" 
                    value={formData.formulaMagDefense}
                    onChange={handleInputChange}
                    step="0.1"
                  />
                </div>
                <div className="input-group">
                  <label>Armor</label>
                  <input 
                    type="number" 
                    name="formulaArmor" 
                    value={formData.formulaArmor}
                    onChange={handleInputChange}
                    step="0.1"
                  />
                </div>
              </div>
            </fieldset>

            {/* Skill Multipliers */}
            <fieldset className="form-section">
              <legend>Skill Multipliers</legend>
              <div className="input-row">
                <div className="input-group">
                  <label>Fist</label>
                  <input 
                    type="number" 
                    name="skillFist" 
                    value={formData.skillFist}
                    onChange={handleInputChange}
                    step="0.1"
                  />
                </div>
                <div className="input-group">
                  <label>Club</label>
                  <input 
                    type="number" 
                    name="skillClub" 
                    value={formData.skillClub}
                    onChange={handleInputChange}
                    step="0.1"
                  />
                </div>
                <div className="input-group">
                  <label>Sword</label>
                  <input 
                    type="number" 
                    name="skillSword" 
                    value={formData.skillSword}
                    onChange={handleInputChange}
                    step="0.1"
                  />
                </div>
                <div className="input-group">
                  <label>Axe</label>
                  <input 
                    type="number" 
                    name="skillAxe" 
                    value={formData.skillAxe}
                    onChange={handleInputChange}
                    step="0.1"
                  />
                </div>
              </div>

              <div className="input-row">
                <div className="input-group">
                  <label>Distance</label>
                  <input 
                    type="number" 
                    name="skillDistance" 
                    value={formData.skillDistance}
                    onChange={handleInputChange}
                    step="0.1"
                  />
                </div>
                <div className="input-group">
                  <label>Shielding</label>
                  <input 
                    type="number" 
                    name="skillShielding" 
                    value={formData.skillShielding}
                    onChange={handleInputChange}
                    step="0.1"
                  />
                </div>
                <div className="input-group">
                  <label>Fishing</label>
                  <input 
                    type="number" 
                    name="skillFishing" 
                    value={formData.skillFishing}
                    onChange={handleInputChange}
                    step="0.1"
                  />
                </div>
                <div className="input-group">
                  <label>Experience</label>
                  <input 
                    type="number" 
                    name="skillExperience" 
                    value={formData.skillExperience}
                    onChange={handleInputChange}
                    step="0.1"
                  />
                </div>
              </div>
            </fieldset>

            <div className="form-actions">
              <button type="submit" className="btn-submit">
                Create Vocation
              </button>
              <button 
                type="button" 
                className="btn-cancel"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </section>
  );
}
