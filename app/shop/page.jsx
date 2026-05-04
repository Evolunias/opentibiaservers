import "./shop.css";

export const metadata = {
  title: "Shop",
};

export default function ShopPage() {
  return (
    <main className="page-shell">
      <div className="shop-content">
        {/* Title */}
        <div className="shop-header">
          <h1>Shop</h1>
        </div>

        {/* Overview Section */}
        <section className="shop-section">
          <h2>Overview</h2>
          <p>
            Here in Evolisca, we have a Store for Premium Points. This is designed for players that support the server to receive a small boost compared to free-to-play players. The boosts are not exclusive to donors, and most items can be obtained within the game for free.
          </p>
          <p>
            We also have a Shop where you can purchase items such as Equipment, Ammo Slots, and many more. All of these items are available to help you customize and enhance your character's capabilities.
          </p>
        </section>

        {/* Token Shop Section */}
        <section className="shop-section">
          <h2>Token Shop</h2>
          <p>
            Using the menu below the Store button, you can locate the Token Shop to access various items. The Token Shop offers a wide range of equipment and supplies to enhance your character.
          </p>
          <p>
            Inside the Token Shop, the main currencies are Gold Nuggets and Star Coins. This is where you can exchange these valuable resources for powerful equipment and useful items.
          </p>

          {/* Armor Section */}
          <div className="shop-subsection">
            <h3>Armor</h3>
            <p>
              Some items offered in this store are armor including helmets, body armor, leg protection, boots, and shields. Each piece provides unique buffs and has different level requirements.
            </p>

            <div className="shop-table-container">
              <h4>Helmets</h4>
              <table className="shop-table">
                <thead>
                  <tr>
                    <th>Item Name</th>
                    <th>Armor</th>
                    <th>Buffs</th>
                    <th>Level Requirement</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Mystic Turban</td>
                    <td>10</td>
                    <td>Protection Holy +1%, HP/MP Regen 50/1 sec</td>
                    <td>200</td>
                    <td>2 Star Coins</td>
                  </tr>
                  <tr>
                    <td>Mage Cap</td>
                    <td>11</td>
                    <td>Max HP/MP +2%</td>
                    <td>320</td>
                    <td>7 Star Coins</td>
                  </tr>
                  <tr>
                    <td>Shroud of Despair</td>
                    <td>18</td>
                    <td>Magic Level +2, Melee Fighting +2, Distance Fighting +2, Fire Protection +3%</td>
                    <td>700</td>
                    <td>15 Star Coins</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="shop-table-container">
              <h4>Body Armor</h4>
              <table className="shop-table">
                <thead>
                  <tr>
                    <th>Item Name</th>
                    <th>Armor</th>
                    <th>Buffs</th>
                    <th>Level Requirement</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Witchhunter's Coat</td>
                    <td>100</td>
                    <td>Protection Ice +2%, Protection Death +2%, Max Mana +2%</td>
                    <td>150</td>
                    <td>2 Star Coins</td>
                  </tr>
                  <tr>
                    <td>Dwarven Armor</td>
                    <td>140</td>
                    <td>Shielding +3, Protection Physical +2%, Protection Mana Drain +2%, Speed +10, Max Health +2%</td>
                    <td>220</td>
                    <td>3 Star Coins</td>
                  </tr>
                  <tr>
                    <td>Dark Lord's Cape</td>
                    <td>150</td>
                    <td>Attack Speed +3%, Protection Mana Drain +2%, Protection Death +3%</td>
                    <td>300</td>
                    <td>5 Star Coins</td>
                  </tr>
                  <tr>
                    <td>Ghost Chestplate</td>
                    <td>170</td>
                    <td>Life Leech Amount +0.07%, Life Leech Chance +0.07%, Protection Physical +4%</td>
                    <td>540</td>
                    <td>10 Star Coins</td>
                  </tr>
                  <tr>
                    <td>Depth Lorica</td>
                    <td>180</td>
                    <td>Shielding +3, Protection Fire +3%, Protection Mana Drain +2%, Protection Earth +3%, Protection Holy +3%, Protection Death +3%, Health Regeneration 100/1 sec, Mana Regeneration 200/1 sec</td>
                    <td>650</td>
                    <td>13 Star Coins</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="shop-table-container">
              <h4>Leg Armor</h4>
              <table className="shop-table">
                <thead>
                  <tr>
                    <th>Item Name</th>
                    <th>Armor</th>
                    <th>Buffs</th>
                    <th>Level Requirement</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Blue Legs</td>
                    <td>30</td>
                    <td>HP/MP Regeneration 100/1 sec</td>
                    <td>220</td>
                    <td>2 Star Coins</td>
                  </tr>
                  <tr>
                    <td>Grasshopper Legs</td>
                    <td>60</td>
                    <td>Attack Speed +3%, Life Leech Amount +0.07%</td>
                    <td>300</td>
                    <td>5 Star Coins</td>
                  </tr>
                  <tr>
                    <td>Ancestor Legs</td>
                    <td>100</td>
                    <td>Attack Speed +4%, Magic Level +2, Melee Fighting +2, Distance Fighting +2</td>
                    <td>700</td>
                    <td>17 Star Coins</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="shop-table-container">
              <h4>Boots</h4>
              <table className="shop-table">
                <thead>
                  <tr>
                    <th>Item Name</th>
                    <th>Armor</th>
                    <th>Buffs</th>
                    <th>Level Requirement</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Firewalker Boots</td>
                    <td>9</td>
                    <td>Magic Level +1, Melee Fighting +1, Distance Fighting +1, Protection Fire +10%, Speed +10</td>
                    <td>200</td>
                    <td>2 Star Coins</td>
                  </tr>
                  <tr>
                    <td>Golden Boots</td>
                    <td>10</td>
                    <td>Healing Increase +3%, Protection Physical +1%, Protection Energy +2%, Speed +20</td>
                    <td>300</td>
                    <td>5 Star Coins</td>
                  </tr>
                  <tr>
                    <td>Kraken Boots</td>
                    <td>13</td>
                    <td>Life Leech Amount +0.03%, Mana Leech Amount +0.03%, HP/MP Regeneration 150/1 sec, Speed +20</td>
                    <td>580</td>
                    <td>13 Star Coins</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="shop-table-container">
              <h4>Shields</h4>
              <table className="shop-table">
                <thead>
                  <tr>
                    <th>Item Name</th>
                    <th>Armor</th>
                    <th>Buffs</th>
                    <th>Level Requirement</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Blessed Shield</td>
                    <td>180</td>
                    <td>Shielding +2, Protection Holy +2%, Protection Death +2%</td>
                    <td>200</td>
                    <td>2 Star Coins</td>
                  </tr>
                  <tr>
                    <td>Nightmare Shield</td>
                    <td>230</td>
                    <td>Shielding +2, Protection Physical +3%, Protection Fire +5%</td>
                    <td>300</td>
                    <td>5 Star Coins</td>
                  </tr>
                  <tr>
                    <td>Necromancer Shield</td>
                    <td>480</td>
                    <td>Extra Weapon Attack +5, Shielding +2, Protection Ice +3%, Protection Death +5%</td>
                    <td>700</td>
                    <td>13 Star Coins</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Weapons Section */}
          <div className="shop-subsection">
            <h3>Weapons</h3>
            <p>
              The Token Shop offers a comprehensive selection of weapons for various playstyles. Each weapon category provides different abilities and stat bonuses to suit your character's class and combat preferences.
            </p>

            <div className="shop-table-container">
              <h4>Knight Weapons</h4>
              <table className="shop-table">
                <thead>
                  <tr>
                    <th>Item Name</th>
                    <th>Attack</th>
                    <th>Defense</th>
                    <th>Buffs</th>
                    <th>Level Requirement</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Relic Sword</td>
                    <td>60</td>
                    <td>20</td>
                    <td>—</td>
                    <td>120</td>
                    <td>3 Star Coins</td>
                  </tr>
                  <tr>
                    <td>Sapphire Hammer</td>
                    <td>60</td>
                    <td>20</td>
                    <td>—</td>
                    <td>120</td>
                    <td>3 Star Coins</td>
                  </tr>
                  <tr>
                    <td>Noble Axe</td>
                    <td>60</td>
                    <td>20</td>
                    <td>—</td>
                    <td>120</td>
                    <td>3 Star Coins</td>
                  </tr>
                  <tr>
                    <td>Avenger</td>
                    <td>85</td>
                    <td>28</td>
                    <td>Melee Fighting +2</td>
                    <td>300</td>
                    <td>7 Star Coins</td>
                  </tr>
                  <tr>
                    <td>Impaler</td>
                    <td>85</td>
                    <td>28</td>
                    <td>Critical Hit Chance +2%</td>
                    <td>300</td>
                    <td>7 Star Coins</td>
                  </tr>
                  <tr>
                    <td>Chaos Mace</td>
                    <td>85</td>
                    <td>28</td>
                    <td>Attack Speed +2%</td>
                    <td>300</td>
                    <td>7 Star Coins</td>
                  </tr>
                  <tr>
                    <td>Shiny Blade</td>
                    <td>150</td>
                    <td>40</td>
                    <td>Melee Fighting +6, Damage Reduction +1%</td>
                    <td>600</td>
                    <td>10 Star Coins</td>
                  </tr>
                  <tr>
                    <td>Hellforged Axe</td>
                    <td>150</td>
                    <td>40</td>
                    <td>Critical Hit Chance +2%, Damage Reduction +1%</td>
                    <td>600</td>
                    <td>10 Star Coins</td>
                  </tr>
                  <tr>
                    <td>Abyss Hammer</td>
                    <td>150</td>
                    <td>40</td>
                    <td>Attack Speed +6%, Damage Reduction +1%, Melee Fighting +1</td>
                    <td>600</td>
                    <td>10 Star Coins</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="shop-table-container">
              <h4>Mage Weapons</h4>
              <table className="shop-table">
                <thead>
                  <tr>
                    <th>Item Name</th>
                    <th>Attack</th>
                    <th>Defense</th>
                    <th>Buffs</th>
                    <th>Level Requirement</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Shimmer Wand</td>
                    <td>65</td>
                    <td>—</td>
                    <td>—</td>
                    <td>120</td>
                    <td>3 Star Coins</td>
                  </tr>
                  <tr>
                    <td>Wand of Defiance</td>
                    <td>95</td>
                    <td>—</td>
                    <td>—</td>
                    <td>320</td>
                    <td>7 Star Coins</td>
                  </tr>
                  <tr>
                    <td>Blessed Staff</td>
                    <td>165</td>
                    <td>—</td>
                    <td>Critical Hit Chance +2%, Attack Speed +5%, Magic Level +5</td>
                    <td>600</td>
                    <td>10 Star Coins</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="shop-table-container">
              <h4>Paladin Weapons (Crossbows)</h4>
              <table className="shop-table">
                <thead>
                  <tr>
                    <th>Item Name</th>
                    <th>Attack</th>
                    <th>Defense</th>
                    <th>Buffs</th>
                    <th>Level Requirement</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Modified Crossbow</td>
                    <td>70</td>
                    <td>—</td>
                    <td>—</td>
                    <td>120</td>
                    <td>3 Star Coins</td>
                  </tr>
                  <tr>
                    <td>Royal Crossbow</td>
                    <td>110</td>
                    <td>—</td>
                    <td>Distance Fighting +4</td>
                    <td>300</td>
                    <td>7 Star Coins</td>
                  </tr>
                  <tr>
                    <td>Crystal Crossbow</td>
                    <td>180</td>
                    <td>—</td>
                    <td>Critical Hit Chance +2%, Attack Speed +4%, Distance Fighting +5</td>
                    <td>600</td>
                    <td>10 Star Coins</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Ammo Slots Section */}
          <div className="shop-subsection">
            <h3>Ammo Slots</h3>
            <p>
              Ammo slots provide additional combat bonuses and special abilities. These items can be equipped by characters of any vocation and offer unique benefits to enhance your combat effectiveness.
            </p>

            <div className="shop-table-container">
              <table className="shop-table">
                <thead>
                  <tr>
                    <th>Item Name</th>
                    <th>Buffs</th>
                    <th>Level Requirement</th>
                    <th>Price</th>
                    <th>Vocation Requirement</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Tuning Fork</td>
                    <td>Extra Weapon Attack +2, Magic Level +3, Melee Fighting +3, Distance Fighting +3</td>
                    <td>200</td>
                    <td>6 Star Coins</td>
                    <td>Any</td>
                  </tr>
                  <tr>
                    <td>Claw of Noxious Spawn</td>
                    <td>Mana Healing Increase +3%, Health Healing Increase +3%</td>
                    <td>350</td>
                    <td>8 Star Coins</td>
                    <td>Any</td>
                  </tr>
                  <tr>
                    <td>Ornamented Brooch</td>
                    <td>Damage Increase +2</td>
                    <td>450</td>
                    <td>10 Star Coins</td>
                    <td>Any</td>
                  </tr>
                  <tr>
                    <td>Phoenix Statue</td>
                    <td>Max Health Amount +3%, Max Mana Amount +3%</td>
                    <td>600</td>
                    <td>13 Star Coins</td>
                    <td>Any</td>
                  </tr>
                  <tr>
                    <td>Vampiric Crest</td>
                    <td>Critical Hit Chance +3%, Critical Damage +5%</td>
                    <td>800</td>
                    <td>16 Star Coins</td>
                    <td>Any</td>
                  </tr>
                  <tr>
                    <td>Reduction Doll</td>
                    <td>Damage Reduction +2</td>
                    <td>800</td>
                    <td>25 Star Coins</td>
                    <td>Knight</td>
                  </tr>
                  <tr>
                    <td>Lit Moon Mirror</td>
                    <td>Damage Increase +2, Mana Rune Healing Increase +3%, Critical Hit Chance +2%</td>
                    <td>800</td>
                    <td>25 Star Coins</td>
                    <td>Mages/Paladin</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Miscellaneous Items Section */}
          <div className="shop-subsection">
            <h3>Miscellaneous Items</h3>
            <p>
              The Token Shop also offers various utility items to enhance your gameplay experience. These consumables and tools provide temporary boosts and assistance in your adventures.
            </p>

            <div className="shop-table-container">
              <table className="shop-table">
                <thead>
                  <tr>
                    <th>Item Name</th>
                    <th>Price</th>
                    <th>Currency</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Upgrade Stone</td>
                    <td>15</td>
                    <td>Star Coin</td>
                    <td>Upgrades an item by +1</td>
                  </tr>
                  <tr>
                    <td>Remove Upgrade Stone</td>
                    <td>80</td>
                    <td>Star Coin</td>
                    <td>Removes upgraded item stones and refunds equal level stones</td>
                  </tr>
                  <tr>
                    <td>Infinity Potion</td>
                    <td>100</td>
                    <td>Gold Nugget</td>
                    <td>Boosts experience rate by 10% for 300 creatures killed</td>
                  </tr>
                  <tr>
                    <td>Stamina Refiller</td>
                    <td>35</td>
                    <td>Star Coin</td>
                    <td>Refills stamina to maximum</td>
                  </tr>
                  <tr>
                    <td>Experience Potion</td>
                    <td>50</td>
                    <td>Star Coin</td>
                    <td>Boosts experience rate by 25% for 1 hour</td>
                  </tr>
                  <tr>
                    <td>Loot Potion</td>
                    <td>30</td>
                    <td>Star Coin</td>
                    <td>Boosts loot rate by 100% for 1 hour</td>
                  </tr>
                  <tr>
                    <td>Soul Pearl</td>
                    <td>20</td>
                    <td>Gold Nugget</td>
                    <td>Adds 50 soul points (green bar)</td>
                  </tr>
                  <tr>
                    <td>Pick</td>
                    <td>3</td>
                    <td>Gold Nugget</td>
                    <td>Mining tool with a chance to break; used to mine for crafting materials</td>
                  </tr>
                  <tr>
                    <td>Broom</td>
                    <td>2</td>
                    <td>Gold Nugget</td>
                    <td>Used on dirt for crafting material collection</td>
                  </tr>
                  <tr>
                    <td>Energy Topaz</td>
                    <td>1</td>
                    <td>Gold Nugget</td>
                    <td>Used to recharge SSA and Might Ring</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="shop-section">
          <p>
            The Token Shop is designed to offer a fair and balanced way for all players to obtain powerful equipment and useful items. Whether you choose to support the server with premium purchases or earn items through gameplay, you will find everything you need to enhance your Evolisca experience.
          </p>
        </section>
      </div>
    </main>
  );
}
