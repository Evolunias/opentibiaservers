import ServerLogo from '@/app/components/ServerLogo';

const contents = [
  ['overview', 'Overview & server identity'],
  ['facts', 'Reference facts & live listing'],
  ['rates', 'Rates, progression & server pace'],
  ['history', 'Launch history & archive record'],
  ['gameplay', 'Baiak map & gameplay loop'],
  ['systems', 'Systems, events & activities'],
  ['pvp', 'Open PvP, wars & rules'],
  ['client', 'Client, account & connection safety'],
  ['start', 'How to start & who it suits'],
  ['faq', 'Baiak Icewar FAQ'],
  ['sources', 'Sources & verification'],
  ['external-links', 'External links'],
];

const facts = [
  ['Listed connection', 'sv.baiak-icewar.com:7171', 'OpenTibiaList identifies this host and game port in a check dated 29 August 2026. Confirm the active endpoint on an operator-controlled page before connecting.'],
  ['Archived connection', 'baiak-icewar.com:7171', 'OT Archive preserves this historical host record. It may describe an earlier endpoint or launch period, so it is not silently treated as the current address.'],
  ['Client family', '8.6 / 8.60', 'The public listing reports 8.6, while OT Archive identifies client 8.6 (8.60). Neither record independently establishes the currently required launcher build.'],
  ['World type', 'Open PvP / PVP', 'The current-style listing labels the world Open PvP; the archive uses PVP. Detailed combat and punishment rules are not publicly documented in the reviewed sources.'],
  ['Country signal', 'Brazil', 'Both the listing and archived record associate the server with Brazil. This is a directory signal, not a latency guarantee from every location.'],
  ['Listing activity check', '166 / 1,500 online · 246 peak · 100.00% uptime', 'OpenTibiaList values checked 29 August 2026. These are time-sensitive directory measurements, not a permanent availability guarantee.'],
  ['Owner fields', 'kowal676 listing · Thor archive', 'The two sources identify different owner names. The profile preserves the difference rather than asserting either as the current operator.'],
];

const rateRows = [
  ['Public listing snapshot', '900× EXP · 1× loot · 1× skill · 1× magic · 1× spawn', 'A dated discovery snapshot. It is useful for comparing high-experience Open Tibia servers, but should be rechecked before play.'],
  ['OT Archive structured field', '900× EXP', 'Historical profile metadata. The archive description also says the experience table is regressive, so 900× should not be read as a complete stage table.'],
  ['OT Archive description', '20× magic · 10× skill · 5× loot', 'Historical promotional configuration. It conflicts with the later listing values and is not presented as the live rate table.'],
  ['Unverified configuration', 'stages, reset policy, stamina, death loss, store effects', 'No operator-readable page was available to confirm these current progression details.'],
];

const systems = [
  ['Custom Baiak map', 'The archive describes a highly edited Baiak map aimed at war-oriented play. Its structured map field names twist.otbm and records dimensions of 20,048 × 20,048.'],
  ['Quests and missions', 'Main quests and missions appear in the historical feature description. Current quest routes, level gates, access requirements, and rewards need an operator guide or dated in-game evidence.'],
  ['Private wars', 'A historical private-war feature supports the server’s combat-focused identity. Confirm declarations, costs, frag treatment, guild requirements, and rewards before organizing a war.'],
  ['VIP and tasks', 'VIPs and tasks are named in the archive description. Current benefits, pricing, task resets, and account restrictions are not verified by the available operator site.'],
  ['Minigames and bosses', 'Historical material names minigames and bosses as repeatable activities beyond ordinary hunting. Specific mechanics, spawn windows, and loot are not verified.'],
  ['Castle 24 and Golden Arena', 'The archive names Castle 24 and Golden Arena, together with Safezone and Firestorm Event, as competitive destinations or activities.'],
  ['Lottery and automatic events', 'Lottery, automatic events, and Firestorm are historical feature claims. Schedules, rewards, and eligibility are naturally time-sensitive.'],
];

const externalLinks = [
  ['Official Baiak Icewar domain', 'https://baiak-icewar.com/'],
  ['OpenTibiaList Baiak Icewar listing', 'https://opentibialist.eu/server/baiak-icewar'],
  ['OT Archive Baiak-Icewar record', 'https://otarchive.com/server/62cde2f41770eac22ec6ad02'],
  ['OpenTibiaServers directory', '/'],
  ['OpenTibiaServers knowledge base', '/knowledge'],
  ['Submit updated server information', '/submit-server'],
];

export default function BaiakIcewarWikiPage() {
  return (
    <main className="cyntara-wiki min-h-screen" data-server-slug="baiak-icewar">
      <header className="cyntara-wiki__header">
        <h1>Baiak Icewar</h1>
        <small>From OpenTibiaServers Wiki, the primary Open Tibia server directory</small>
      </header>

      <div className="cyntara-wiki__grid">
        <article className="cyntara-wiki__content">
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="min-w-0 flex-1">
              <p><strong>Baiak Icewar</strong> is a Brazil-associated <strong>Open Tibia server</strong> listed for the classic 8.6 client family, <em>Open PvP</em>, and 900× experience. Its historical record describes a customized Baiak map built around fast progression, guild conflict, private wars, tasks, bosses, minigames, and arena-style activities.</p>
              <p>This detailed <strong>Baiak Icewar Wiki</strong> separates a current-style server-list snapshot from the older archive record. <u>Verify the active website, client, login host, rules, rates, and account path before downloading or spending money</u>: the official domain returned a Cloudflare verification page during research rather than readable server documentation.</p>
            </div>
            <div className="w-full shrink-0 md:w-64"><ServerLogo server={{ name: 'Baiak Icewar', slug: 'baiak-icewar', host: 'sv.baiak-icewar.com' }} size="profile" /></div>
          </div>

          <nav className="cyntara-wiki__toc" aria-label="Table of contents">
            <h2>Contents</h2>
            <ol>{contents.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ol>
          </nav>

          <section id="overview">
            <SectionHeading>Overview &amp; server identity</SectionHeading>
            <p><strong>Baiak Icewar OT</strong> fits the Baiak tradition of condensed, customized worlds: less emphasis on a slow retail-style map journey and more on quick access to hunting, PvP, social competition, and repeatable activities. The archived description calls its map heavily edited and war-focused, while the public listing presents a high-rate 8.6 Open PvP identity.</p>
            <p>The two evidence trails are related by name but not interchangeable. OpenTibiaList currently records <code>sv.baiak-icewar.com:7171</code>; OT Archive preserves <code>baiak-icewar.com:7171</code>, a 2019 inauguration statement, and a historical configuration. Keeping both records visible helps players evaluate the <em>Baiak Icewar server</em> without turning old discovery data into a present-tense promise.</p>
            <div className="cyntara-wiki__callout"><strong>Research scope</strong><p>“Baiak,” “900×,” and “Open PvP” are useful discovery terms, not a full current ruleset. The reviewed sources do not settle exact stages, resets, protection rules, anti-cheat policy, store terms, or character balance.</p></div>
          </section>

          <section id="facts">
            <SectionHeading>Reference facts &amp; live listing</SectionHeading>
            <p>This table combines the specific public facts available for <strong>Baiak Icewar</strong>. Activity values help visitors compare <a href="/">Open Tibia servers</a>, while their recorded date and source context prevent them from being mistaken for permanent live status.</p>
            <DataTable headers={['Field', 'Recorded value', 'Evidence & context']} rows={facts} />
          </section>

          <section id="rates">
            <SectionHeading>Rates, progression &amp; server pace</SectionHeading>
            <p>A 900× experience label places <strong>Baiak Icewar 8.6</strong> in the high-experience category, generally signaling a shorter route to combat-ready levels than a low-rate or retail-paced world. That label alone does not disclose the actual progression curve: the listing shows 1× secondary rates, but the older archive describes different historical values and a regressive experience table.</p>
            <DataTable headers={['Source context', 'Recorded configuration', 'How to read it']} rows={rateRows} />
            <div className="cyntara-wiki__callout"><strong>Rate reconciliation</strong><p><u>Check the live operator rules before planning a character</u>. Experience stages, skills, magic, loot, spawn, reset mechanics, and premium benefits can materially change how a high-rate Baiak server feels.</p></div>
          </section>

          <section id="history">
            <SectionHeading>Launch history &amp; archive record</SectionHeading>
            <p>OT Archive retains an inauguration statement for <strong>15 November 2019 at 15:00</strong>, while the same record header says “Abriu 16-10” without a year. The source does not explain whether these refer to separate openings, a relaunch, or an entry discrepancy. They are preserved as historical claims rather than proof of uninterrupted operation.</p>
            <p>The archive identifies TFS 1.X with engine version 3, the <code>twist.otbm</code> map file, and a stated map size of 20,048 × 20,048. It was added on 07/12/22 and last updated on 19 January 2024 at 08:20 UTC. Its promotional wording belongs to the historical record, not an independent quality assessment.</p>
            <div className="grid gap-4 md:grid-cols-3"><FactCard label="2019 inauguration" text="A source-attributed announcement: 15/11/2019 at 15:00." /><FactCard label="8.60 foundation" text="Both available records place the project in the classic 8.6 / 8.60 client family." /><FactCard label="Two owner fields" text="Thor appears in the archive; kowal676 appears in the later public listing." /></div>
          </section>

          <section id="gameplay">
            <SectionHeading>Baiak map &amp; gameplay loop</SectionHeading>
            <p>The central <strong>Baiak Icewar gameplay</strong> signal is density: accelerated advancement on a customized Baiak map with activities designed to bring players into the same competitive spaces. The archive’s war-oriented map description, private-war claim, and arena/event features all point toward a guild-conscious rather than exploration-first experience.</p>
            <p>Players should not transfer assumptions from retail Tibia. Teleports, hunting routes, NPC locations, quest order, item prices, vocation balance, and boss mechanics may all differ. The <a href="/knowledge">OpenTibiaServers knowledge base</a> provides general context for Open Tibia concepts, but the live operator’s material remains authoritative for this world.</p>
            <div className="cyntara-wiki__callout"><strong>Known historical travel hint</strong><p>The archive description mentions <code>!fly templo</code> for teleporting to some areas. Treat this as an archived command reference, not a confirmed current instruction.</p></div>
          </section>

          <section id="systems">
            <SectionHeading>Systems, events &amp; activities</SectionHeading>
            <p>The following <strong>Baiak server features</strong> come from the archived server description. They make the page useful for players searching for tasks, bosses, wars, events, and arena content, while clearly marking which details still need current operator verification.</p>
            <div className="grid gap-4 md:grid-cols-2">{systems.map(([name, detail]) => <FactCard key={name} label={name} text={detail} />)}</div>
          </section>

          <section id="pvp">
            <SectionHeading>Open PvP, wars &amp; rules</SectionHeading>
            <p><strong>Baiak Icewar PvP</strong> is listed as <em>Open PvP</em>, and its archived description additionally names private wars and a map oriented toward WAR. This combination may suit groups looking for direct conflict, organized guild play, bosses, and events; it may be less suitable for players who prefer a low-conflict Optional PvP environment.</p>
            <p>The available sources do not document frag limits, skull durations, unjustified-kill thresholds, death loss, level protection, war declarations, multi-client policy, bot policy, or store advantages. <u>Read the active rules before funding an account, moving items, or joining a guild war.</u></p>
            <div className="grid gap-4 md:grid-cols-2"><FactCard label="Good fit if" text="You want a compact 8.6 Baiak world with rapid progression, Open PvP, guild activity, bosses, and competitive events." /><FactCard label="Check first" text="PvP penalties, war requirements, task resets, VIP benefits, anti-cheat enforcement, event schedules, and any payment policy." /></div>
          </section>

          <section id="client">
            <SectionHeading>Client, account &amp; connection safety</SectionHeading>
            <p>The listing records <code>sv.baiak-icewar.com:7171</code>; the archive records <code>baiak-icewar.com:7171</code> and claims a custom client. The official domain was not readable through automated research because it presented a Cloudflare verification screen. That means no active download, account page, launcher version, staff channel, or rules page could be independently verified.</p>
            <ol><li>Start at the operator-controlled domain and ensure that account and download paths remain on an official, expected domain.</li><li>Confirm the active client version, login host, port, release notes, and any published checksum before installing.</li><li>Download only from a current official source; avoid reposted clients and do not disable operating-system or antivirus protections to force an installation.</li><li>Review the current policies for automation, multi-clienting, account recovery, trading, donations, and PvP.</li><li>Check live population close to your session, because directory counts and endpoints can change.</li></ol>
          </section>

          <section id="start">
            <SectionHeading>How to start &amp; who it suits</SectionHeading>
            <p>Compare the active official instructions with profiles for <a href="/servers/demolidores">Demolidores</a>, <a href="/servers/cyntara">Cyntara</a>, and <a href="/servers/rubinot">RubinOT</a> to see how different <em>Open Tibia</em> projects approach map scale, progression, PvP, and custom systems.</p>
            <ol><li>Confirm whether the active world still uses 8.60 and whether 900× is a headline rate, a stage, or part of a regressive table.</li><li>Read the latest rules for Open PvP, private wars, VIP, tasks, stores, resets, and automation.</li><li>Verify the current client and login endpoint through the operator-controlled path before creating an account.</li><li>Check current guild and event activity instead of relying only on launch announcements or an old peak record.</li></ol>
            <p>Baiak Icewar is most likely to appeal to players who value rapid progress and immediate conflict over a slow, exploration-heavy real-map experience.</p>
          </section>

          <section id="faq">
            <SectionHeading>Baiak Icewar FAQ</SectionHeading>
            <div className="grid gap-4"><FactCard label="What version is Baiak Icewar?" text="Public sources associate Baiak Icewar with the 8.6 / 8.60 client family. Confirm the active client build and launcher on the official path before downloading." /><FactCard label="Is Baiak Icewar online?" text="OpenTibiaList recorded 166 of 1,500 players and 100.00% uptime in its 29 August 2026 check. This is a dated directory snapshot, not a real-time availability guarantee." /><FactCard label="What are Baiak Icewar rates?" text="The listing shows 900× EXP with 1× loot, skill, magic, and spawn. The archive reports different historical secondary rates and a regressive experience table, so verify the current configuration." /><FactCard label="Where can I safely download Baiak Icewar?" text="Use only a current link from the operator-controlled website after confirming the domain and client information. The official site was behind Cloudflare verification during this research, so a direct download URL could not be verified." /></div>
          </section>

          <section id="sources">
            <SectionHeading>Sources &amp; verification</SectionHeading>
            <p>This Wiki profile uses OT Archive for historical configuration, map metadata, launch wording, owner field, and feature descriptions. OpenTibiaList provides the separate server-list activity, rates, owner, and host snapshot. The official domain is linked as the correct place for live verification, but it exposed only a Cloudflare security-check page during research.</p>
            <div className="grid gap-3 md:grid-cols-2"><SourceLink href="https://otarchive.com/server/62cde2f41770eac22ec6ad02" label="OT Archive: Baiak-Icewar record" /><SourceLink href="https://opentibialist.eu/server/baiak-icewar" label="OpenTibiaList: Baiak Icewar listing" /><SourceLink href="https://baiak-icewar.com/" label="Baiak Icewar official domain" /><a href="/submit-server" className="rounded border border-black bg-white p-4 font-bold hover:no-underline">Submit a verified profile update</a></div>
            <div className="cyntara-wiki__callout"><strong>Evidence standard</strong><p>Current claims should come from an operator-controlled page, a dated announcement, verified live status, or clearly attributed in-game evidence. Archived records and public directories are useful for discovery and history, but can become stale.</p></div>
          </section>

          <section id="external-links">
            <SectionHeading>External links</SectionHeading>
            <ul>{externalLinks.map(([label, href]) => <li key={href}><ExternalLink href={href}>{label}</ExternalLink></li>)}</ul>
          </section>
        </article>

        <aside className="cyntara-wiki__sidebar">
          <div className="cyntara-wiki__infobox"><div className="cyntara-wiki__infobox-header">Baiak Icewar</div><ServerLogo server={{ name: 'Baiak Icewar', slug: 'baiak-icewar', host: 'sv.baiak-icewar.com' }} size="profile" /><table><tbody><tr><th>Website</th><td><a href="https://baiak-icewar.com/" target="_blank" rel="nofollow noopener noreferrer">baiak-icewar.com</a></td></tr><tr><th>Listed host</th><td><code>sv.baiak-icewar.com:7171</code></td></tr><tr><th>Archive host</th><td><code>baiak-icewar.com:7171</code></td></tr><tr><th>Client</th><td>8.6 / 8.60</td></tr><tr><th>World type</th><td>Open PvP / PVP</td></tr><tr><th>Region signal</th><td>Brazil</td></tr><tr><th>Map record</th><td>twist.otbm · custom Baiak</td></tr><tr><th>Experience</th><td>900× listing / regressive archive</td></tr><tr><th>Listing check</th><td>166 / 1,500 · 246 peak</td></tr><tr><th>Profile status</th><td>Archive- and listing-backed</td></tr></tbody></table></div>
          <div className="cyntara-wiki__callout"><strong>Before downloading</strong><p>Confirm the active client, endpoint, rules, and account path from the operator. Historical and current-style records are intentionally kept distinct.</p></div>
          <div className="cyntara-wiki__recommended"><h3>Explore the directory</h3><p>Compare Baiak Icewar with other Open Tibia worlds by protocol, PvP type, region, rates, and activity.</p><a className="cyntara-wiki__button" href="/?search=Baiak%20Icewar">Browse similar servers</a></div>
        </aside>
      </div>
    </main>
  );
}

function SectionHeading({ children }) { return <div className="cyntara-wiki__section-heading"><h2>{children}</h2></div>; }
function FactCard({ label, text }) { return <div className="rounded border border-black bg-white p-4"><h3 className="text-base font-bold text-black">{label}</h3><p className="mt-2 text-sm leading-7 text-black">{text}</p></div>; }
function DataTable({ headers, rows }) { return <div className="cyntara-wiki__table-wrap"><table className="cyntara-wiki__table"><thead><tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr></thead><tbody>{rows.map((row) => <tr key={row[0]}>{row.map((cell, index) => index === 0 ? <th key={cell}>{cell}</th> : <td key={cell}>{index === 1 ? <strong>{cell}</strong> : cell}</td>)}</tr>)}</tbody></table></div>; }
function ExternalLink({ href, children }) { const external = href.startsWith('http'); return <a href={href} target={external ? '_blank' : undefined} rel={external ? 'nofollow noopener noreferrer' : undefined}>{children}</a>; }
function SourceLink({ href, label }) { return <a href={href} target="_blank" rel="nofollow noopener noreferrer" className="rounded border border-black bg-white p-4 font-bold hover:no-underline">{label}</a>; }
