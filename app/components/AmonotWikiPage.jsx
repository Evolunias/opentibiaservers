import ServerLogo from '@/app/components/ServerLogo';
import DirectoryRecommendation from '@/app/components/DirectoryRecommendation';

const contents = [
  ['overview', 'Overview & network identity'],
  ['facts', 'Reference facts'],
  ['rates', 'Rates & progression'],
  ['systems', 'Tasks, addons, VIP & loyalty'],
  ['pvp', 'Retro Open PvP, guilds & rules'],
  ['economy', 'Market & character bazaar'],
  ['clients', 'Client, account & safe downloads'],
  ['worlds', 'World selection & live activity'],
  ['sources', 'Sources & verification'],
  ['external-links', 'External links'],
];

const referenceRows = [
  ['Network', 'AmonOT', 'The official site presents Horus, Anubis, and Baiak world choices.'],
  ['Official host', 'amonot.online', 'Use the operator-controlled website for current account, client, rules, and support information.'],
  ['Horus connection', 'AmonOT.online:7171', 'Published on the official Server Information page; confirm the selected world before connecting.'],
  ['Horus client', '15.11.00', 'Official Server Information value for the Horus selection.'],
  ['Horus PvP type', 'Retro Open PvP', 'Official Server Information value for the Horus selection.'],
  ['Directory region signal', 'Brazil', 'The directory inventory associates all three discovered AmonOT endpoints with Brazil.'],
  ['World endpoints', 'horus, anubis, and baiak.amonot.online:7171', 'Directory inventory records separate endpoints; client versions and live availability should be checked through AmonOT.'],
];

const experienceRows = [
  ['1–100', '600×'], ['101–200', '500×'], ['201–300', '300×'], ['301–400', '150×'], ['401–450', '100×'], ['451–500', '90×'], ['501–550', '80×'], ['551–600', '40×'], ['601–700', '20×'], ['701–800', '10×'], ['801–900', '6×'], ['901–1,000', '4×'], ['1,001–1,200', '3×'], ['1,201–1,500', '2×'], ['1,501–2,250', '1×'], ['2,251–3,000', '0.75×'], ['3,001–4,000', '0.5×'], ['4,001+', '0.3×'],
];

const trainingRows = [
  ['Skills 0–30', '40×'], ['31–70', '30×'], ['71–80', '13×'], ['81–95', '5×'], ['96–110', '3×'], ['111–130', '2×'], ['131+', '1×'],
];

const magicRows = [
  ['Magic level 0–25', '35×'], ['26–40', '20×'], ['41–60', '11×'], ['61–90', '5×'], ['91–110', '3×'], ['111–130', '2×'], ['131+', '1×'],
];

const systemRows = [
  ['Repeatable tasks', 'The official task catalogue lists 77 tasks with easy, medium, and hard filters. Listed destinations include Warzones, libraries, Kilmaresh, Otherworld, Ferumbras Ascension, and endgame hunting zones.'],
  ['Addon bonuses', 'Default vocation bonuses add life, mana, and skills per addons; the official catalogue also lists named outfit bonuses for experience, loot, damage, absorption, critical effects, and leech.'],
  ['VIP', 'Published VIP benefits include +10% monster experience, +5% loot, +10% exercise speed, doubled task kills, protect-zone stamina regeneration, and queue priority.'],
  ['Loyalty', 'The active account-bound loyalty system awards skill percentage bonuses across account characters, up to 20%, from store-spend loyalty points.'],
  ['Official player tools', 'The site exposes an experience table, reset calculator, bless calculator, tasks page, addon-bonus catalogue, and FAQ.'],
];

const pvpRows = [
  ['Protection level', '150'],
  ['PZ lock / frag duration', '0 minutes / 0 minutes'],
  ['Red skull duration', '3 days'],
  ['Black skull duration', '7 days'],
  ['Red skull thresholds', 'Published as 15–30 daily, 75–150 weekly, and 225–300 monthly frags.'],
  ['Black skull thresholds', 'Published as 30 daily, 150 weekly, and 450 monthly frags.'],
  ['Guild activity', 'Official community navigation includes guild lists and guild-war pages.'],
];

const bazaarRows = [
  ['Listings', 'Creating a character auction is listed as free (0 TC).'],
  ['Bidding', 'Each bid costs 50 TC and is stated to be non-refundable; players may set a maximum bid.'],
  ['Sale fee', 'A 5% fee is deducted from a completed sale.'],
  ['Transfer', 'The official system states that the winning character is transferred automatically to the buyer account.'],
  ['Restrictions', 'Sellers may list only their own characters; active-auction characters cannot be played, and banned or restricted characters cannot be listed.'],
  ['Integrity', 'Self-bidding, bid withdrawal, and manipulation are prohibited; the official explanation warns that manipulation can result in a ban.'],
];

const externalLinks = [
  ['AmonOT official homepage', 'https://amonot.online/welcome'],
  ['Official Server Information', 'https://amonot.online/serverinfo?lang=en'],
  ['Official tasks catalogue', 'https://amonot.online/tasks'],
  ['Official addon bonuses', 'https://amonot.online/addonbonus'],
  ['Official VIP & loyalty information', 'https://amonot.online/vip'],
  ['Official rules', 'https://amonot.online/rules'],
  ['Official downloads', 'https://amonot.online/downloads'],
  ['Official character bazaar explanation', 'https://amonot.online/bazaar_explain'],
  ['Official AmonOT wiki', 'https://amonot.online/wiki'],
  ['OpenTibiaServers directory', '/'],
];

export default function AmonotWikiPage() {
  return (
    <main className="cyntara-wiki min-h-screen" data-server-slug="amonot">
      <header className="cyntara-wiki__header"><h1>AmonOT</h1><small>From OpenTibiaServers Wiki, the primary Open Tibia server directory</small></header>
      <div className="cyntara-wiki__grid">
        <article className="cyntara-wiki__content">
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="min-w-0 flex-1">
              <p><strong><em><u>AmonOT</u></em></strong> is a Brazilian <strong>Open Tibia server network</strong> whose official site presents the Horus, Anubis, and Baiak worlds. Horus is documented as a <strong>Retro Open PvP server</strong> with a staged experience curve, separate skill and magic-level stages, repeatable tasks, addon bonuses, VIP and loyalty systems, guild activity, a player market, and an official character bazaar.</p>
              <p>This <em>AmonOT server guide</em> distinguishes source-backed Horus settings from values that can vary by world or change over time. Visit the official <a href="https://amonot.online/serverinfo?lang=en" target="_blank" rel="nofollow noopener noreferrer">Server Information</a>, rules, and download pages before creating an account or installing a client.</p>
            </div>
            <div className="w-full shrink-0 md:w-64"><ServerLogo server={{ name: 'AmonOT', slug: 'amonot', host: 'amonot.online' }} size="profile" /></div>
          </div>

          <nav className="cyntara-wiki__toc" aria-label="Table of Contents"><h2>Contents</h2><ol>{contents.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ol></nav>

          <section id="overview"><SectionHeading>Overview &amp; network identity</SectionHeading>
            <p>AmonOT is best researched as a network, not as one universal ruleset. The official Server Information interface lets players choose <strong>Horus</strong>, <strong>Anubis</strong>, or <strong>Baiak</strong>; the detailed rates and PvP settings recorded on this page are specifically those shown for Horus. This distinction matters for players searching for an <strong>AmonOT download</strong>, rates, or server address: choose a world first, then verify that world’s current client and rules.</p>
            <p>The documented Horus experience blends a very fast opening phase with a sharply tapering high-level curve. It is complemented by repeatable task content, cosmetic and power-oriented addon bonuses, account progression, and trading tools. That makes it a fit for players looking for a modern-client Retro Open PvP experience with both competitive and collection-driven goals.</p>
            <div className="cyntara-wiki__callout"><strong>World-specific research note</strong><p>Horus values are not automatically Anubis or Baiak values. Current world status, population, rates, events, balances, client releases, and access conditions belong to the active official pages.</p></div>
          </section>

          <section id="facts"><SectionHeading>Reference facts</SectionHeading><p>These facts combine the official Horus server-information page with the directory’s endpoint inventory. They should be used as a starting point, not a substitute for a live connection check.</p><Table headers={['Field', 'Recorded value', 'Evidence and context']} rows={referenceRows} /></section>

          <section id="rates"><SectionHeading>Rates &amp; progression</SectionHeading>
            <p>The official <a href="https://amonot.online/serverinfo?lang=en" target="_blank" rel="nofollow noopener noreferrer">Horus Server Information</a> page lists <strong>3× loot</strong>, <strong>3× spawn</strong>, and a staged experience system that moves from 600× at levels 1–100 to 0.3× at level 4,001 and beyond. Skills and magic level use their own tapering tables.</p>
            <h3>Horus experience stages</h3><Table headers={['Character level', 'Experience rate']} rows={experienceRows} />
            <div className="grid gap-5 lg:grid-cols-2"><div><h3>Skill stages</h3><Table headers={['Skill range', 'Rate']} rows={trainingRows} /></div><div><h3>Magic-level stages</h3><Table headers={['Magic-level range', 'Rate']} rows={magicRows} /></div></div>
            <p>For players comparing <strong><em>AmonOT rates</em></strong>, the headline early-game multiplier is only part of the picture. The published curve rewards fast onboarding while progressively slowing levels, skills, and magic at higher thresholds. Confirm any event modifiers or recent balance changes in official news before planning a build around a historical rate.</p>
          </section>

          <section id="systems"><SectionHeading>Tasks, addons, VIP &amp; loyalty</SectionHeading>
            <p>AmonOT’s official library presents several overlapping progression systems. They create reasons to return after basic leveling: task targets cover a broad range of hunting destinations, while addons, VIP benefits, and account loyalty can affect character growth and efficiency.</p>
            <Table headers={['System', 'Officially documented context']} rows={systemRows} />
            <p>The task catalogue labels its entries repeatable and groups them by difficulty. Its displayed rewards are represented by an item image and quantity, but the page does not name that reward item or list kill counts, cooldowns, NPCs, or acceptance requirements. Likewise, the addon page lists effects but does not explain whether bonuses stack or precisely how they are activated. Consult the current <a href="https://amonot.online/tasks" target="_blank" rel="nofollow noopener noreferrer">tasks</a> and <a href="https://amonot.online/addonbonus" target="_blank" rel="nofollow noopener noreferrer">addon bonuses</a> pages for live details.</p>
            <div className="cyntara-wiki__callout"><strong>VIP and store context</strong><p>The official VIP page ties loyalty points to coins spent in the store. Review current benefits, pricing, rules, and legal terms directly with AmonOT before making a purchase; this guide does not infer value or permanence from a listed bonus.</p></div>
          </section>

          <section id="pvp"><SectionHeading>Retro Open PvP, guilds &amp; rules</SectionHeading>
            <p>Horus is officially identified as <strong><em><u>Retro Open PvP</u></em></strong>. The settings below show why prospective guild players should study the rules before committing: PZ lock and frag duration are both published as zero minutes, while skull consequences use separate daily, weekly, monthly, and duration values.</p>
            <Table headers={['Setting', 'Published Horus value']} rows={pvpRows} />
            <p>The official interface also links to guilds, guild wars, last kills, bans, and player rankings. Those community tools can help players assess the live competitive environment, but no static guide can establish the current state of a war, guild, enforcement decision, or population.</p>
            <div className="cyntara-wiki__callout"><strong>Rules first</strong><p>AmonOT directs players to report rule violations with <strong>Ctrl + Z</strong>, and links to a dedicated rules page. Read the active rules for botting, multi-clienting, frag conduct, exploits, trading, and punishments before playing in open PvP.</p></div>
          </section>

          <section id="economy"><SectionHeading>Market &amp; character bazaar</SectionHeading>
            <p>AmonOT provides official community market and character-bazaar pages, creating a system-controlled route for buying and selling eligible characters in Tibia Coins rather than relying on informal account trades. The official bazaar explanation describes its fees, bidding behavior, automatic transfer, and anti-manipulation restrictions.</p>
            <Table headers={['Bazaar area', 'Officially documented rules']} rows={bazaarRows} />
            <p>Do not confuse an official in-game bazaar with off-platform account sales. Verify the exact character, current auction details, fees, eligibility, and rules on the live official page before bidding. Never share credentials or use a third-party middleman for an account transfer.</p>
          </section>

          <section id="clients"><SectionHeading>Client, account &amp; safe downloads</SectionHeading>
            <p>The official download interface advertises an <strong>AmonOT Launcher</strong> with auto-update functionality. For Horus, the published client version is 15.11.00. Because AmonOT offers multiple worlds, the official download and selected-world information should take precedence over an old forum attachment, video description, or copied host address.</p>
            <ol><li>Create or manage an account only through the official <a href="https://amonot.online/account" target="_blank" rel="nofollow noopener noreferrer">account</a> path.</li><li>Confirm your target world, its active connection information, and its rules.</li><li>Download the launcher from the official <a href="https://amonot.online/downloads" target="_blank" rel="nofollow noopener noreferrer">downloads</a> page.</li><li>Review current release notes, supported platforms, and any required account steps before connecting.</li></ol>
            <div className="cyntara-wiki__callout"><strong>Download safety</strong><p>Use only operator-controlled AmonOT links. Do not disable security software to run an unknown installer, share account credentials, or treat a community mirror as an official client update.</p></div>
          </section>

          <section id="worlds"><SectionHeading>World selection &amp; live activity</SectionHeading>
            <p>The AmonOT website currently exposes Horus, Anubis, and Baiak as selectable worlds. The directory inventory separately records their Brazil-hosted endpoints and historic peak signals: Baiak 968, Anubis 296, and Horus 229. These are inventory observations dated July 25, 2026—not current online counts, capacity, or promises of activity.</p>
            <p>For a responsible start, compare the selected world’s official server information, news, online list, client requirement, and PvP setup on the day you intend to play. This avoids treating an older directory record or a cross-world setting as a present-day guarantee.</p>
          </section>

          <section id="sources"><SectionHeading>Sources &amp; verification</SectionHeading>
            <p>This page prioritizes AmonOT’s own Server Information, task, addon, VIP, bazaar, rules, downloads, and wiki paths. The OpenTibiaServers inventory is used only to identify separate world endpoints and dated discovery signals. Official pages are the authority for live operation, pricing, enforcement, schedules, availability, and game balance.</p>
            <div className="grid gap-3 md:grid-cols-2"><SourceLink href="https://amonot.online/serverinfo?lang=en" label="Official Horus Server Information" /><SourceLink href="https://amonot.online/tasks" label="Official task catalogue" /><SourceLink href="https://amonot.online/addonbonus" label="Official addon-bonus catalogue" /><SourceLink href="https://amonot.online/vip" label="Official VIP & loyalty information" /><SourceLink href="https://amonot.online/bazaar_explain" label="Official character-bazaar explanation" /><SourceLink href="https://amonot.online/rules" label="Official rules" /></div>
          </section>

          <section className="cyntara-wiki__recommended" aria-label="Related server guides"><h3>Compare Open Tibia server styles</h3><p>Compare AmonOT’s modern-client Retro Open PvP profile with other source-led server guides and the live directory.</p><div className="flex flex-wrap gap-3"><a className="cyntara-wiki__button" href="/servers/noxiousot">NoxiousOT guide</a><a className="cyntara-wiki__button" href="/servers/rubinot">RubinOT guide</a><a className="cyntara-wiki__button" href="/servers/demolidores">Demolidores guide</a><a className="cyntara-wiki__button" href="/?search=15">Browse 15.x servers</a></div></section>
          <DirectoryRecommendation />
          <section id="external-links"><SectionHeading>External links</SectionHeading><ul>{externalLinks.map(([label, href]) => <li key={href}><ExternalLink href={href}>{label}</ExternalLink></li>)}</ul></section>
        </article>

        <aside className="cyntara-wiki__sidebar"><div className="cyntara-wiki__infobox"><div className="cyntara-wiki__infobox-header">AmonOT</div><ServerLogo server={{ name: 'AmonOT', slug: 'amonot', host: 'amonot.online' }} size="profile" /><table><tbody><tr><th>Network worlds</th><td>Horus, Anubis, Baiak</td></tr><tr><th>Horus host</th><td><code>AmonOT.online:7171</code></td></tr><tr><th>Horus client</th><td>15.11.00</td></tr><tr><th>Horus PvP</th><td>Retro Open PvP</td></tr><tr><th>Horus rates</th><td>600× to 0.3× staged EXP</td></tr><tr><th>Loot / spawn</th><td>3× / 3×</td></tr><tr><th>Protection level</th><td>150</td></tr><tr><th>Server save</th><td>Daily at 22:00</td></tr><tr><th>Systems</th><td>Tasks, addons, VIP, loyalty, bazaar</td></tr><tr><th>Website</th><td><a href="https://amonot.online/welcome" target="_blank" rel="nofollow noopener noreferrer">amonot.online</a></td></tr></tbody></table></div><div className="cyntara-wiki__callout"><strong>Before downloading</strong><p>Choose a world, verify its current client and rules, then use only the official launcher path.</p><a href="https://amonot.online/downloads" target="_blank" rel="nofollow noopener noreferrer">Open official downloads</a></div><div className="cyntara-wiki__recommended"><h3>Explore the directory</h3><p>Compare live server listings by version, PvP type, region, activity, and systems.</p><a className="cyntara-wiki__button" href="/">Browse server listings</a></div></aside>
      </div>
    </main>
  );
}

function SectionHeading({ children }) { return <div className="cyntara-wiki__section-heading"><h2>{children}</h2></div>; }
function Table({ headers, rows }) { return <div className="cyntara-wiki__table-wrap"><table className="cyntara-wiki__table"><thead><tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr></thead><tbody>{rows.map((row) => <tr key={row[0]}>{row.map((value, index) => index === 0 ? <th key={value}>{value}</th> : <td key={value}>{index === 1 ? <strong>{value}</strong> : value}</td>)}</tr>)}</tbody></table></div>; }
function ExternalLink({ href, children }) { const external = href.startsWith('http'); return <a href={href} target={external ? '_blank' : undefined} rel={external ? 'nofollow noopener noreferrer' : undefined}>{children}</a>; }
function SourceLink({ href, label }) { return <ExternalLink href={href}><span className="block rounded border border-black bg-white p-4 font-bold hover:no-underline">{label}</span></ExternalLink>; }
