import ServerLogo from '@/app/components/ServerLogo';

const contents = [
  ['overview', 'Overview & identity'],
  ['facts', 'Reference facts'],
  ['history', 'Archive record & longevity'],
  ['world', 'Global map & portals'],
  ['progression', 'Progression, PvP & rules'],
  ['client', 'Client & connection safety'],
  ['activity', 'Activity signals & record differences'],
  ['start', 'How to start safely'],
  ['sources', 'Sources & verification'],
  ['external-links', 'External links'],
];

const referenceRows = [
  ['Server name', 'Demolidores', 'Name shown in the OT Archive record and the local directory profile.'],
  ['Official domain candidate', 'demolidores.com.br', 'The archive connects this domain to the server; its current public pages were access-challenged when checked.'],
  ['Archived address', 'demolidores.com.br:7171', 'Address shown in OT Archive. Confirm the current login host on an operator-controlled page before connecting.'],
  ['Directory address signal', 'sv.demolidores.com.br:7171', 'A separate public-directory snapshot attached to this profile.'],
  ['Protocol', 'Tibia 8.60', 'Structured value in the archive record, also consistent with the directory profile.'],
  ['Experience', '999×', 'Structured value in the archive record and directory signal; no complete current rate table was available.'],
  ['PvP classification', 'PVP', 'Archive and public-directory classification; detailed combat rules were not published in the reviewed record.'],
  ['Region signal', 'Brazil', 'Brazil flag in OT Archive and Brazil in the directory snapshot.'],
  ['Owner and map author', 'Allan Rizzotti', 'Displayed in the archived Server Info and Map Info sections.'],
];

const mapRows = [
  ['Map file', 'realmap.otbm', 'Name listed in OT Archive Map Info.'],
  ['Map style', 'Global map with portals', '“Global com portais!” is an archived promotional claim; portal locations and availability require current verification.'],
  ['Recorded scale', '65,000 × 65,000', 'Map dimensions displayed by OT Archive; treat as recorded map metadata, not a live audit.'],
  ['Map author', 'Allan Rizzotti', 'Name displayed in the archived Map Info section.'],
  ['Areas, towns and quests', 'Not documented in the reviewed sources', 'A live map guide or operator documentation is needed before publishing route or quest advice.'],
];

const configurationRows = [
  ['Experience', '999×', 'A high-experience profile that points to fast early advancement; precise stages and any bonuses are not published in the reviewed record.'],
  ['Client', '8.6 / 8.60', 'The archived record identifies the client family. Confirm the required current client on an operator-controlled page.'],
  ['PvP', 'PVP', 'This is a classification, not a full ruleset. Skull thresholds, frags, death loss, wars and protection rules are unverified.'],
  ['Engine', 'Demolidores 2.0', 'Engine name and version shown in the archived technical record.'],
  ['Vocations and balancing', 'Not documented', 'No reviewed source describes vocation changes, spells, skills, or class balance.'],
  ['Items, monsters and bosses', 'Not documented', 'Do not infer content from the real-map label or portal claim.'],
];

const activityRows = [
  ['OpenTibiaServers snapshot', 'sv.demolidores.com.br:7171', 'Brazil · 8.6 · PVP · 999×', '695 / 2,000 players, 98.97% uptime, directory rank #10', 'Profile-attached public ranking snapshot; time-sensitive, not a live guarantee.'],
  ['OT Archive record', 'demolidores.com.br:7171', 'Brazil · 8.60 · PVP · 999×', 'No live player count in the reviewed record', 'Archive record added 07/12/22 and updated 11/04/23, shown as displayed.'],
  ['TibiaOTList “Global Demolidores”', 'demolidores.net:7171', 'Poland · 7.10 · type and rates unavailable', '568 / 2,500 when captured', 'Similar name with a different host, country and protocol signal; not merged into the Demolidores profile.'],
];

const externalLinks = [
  ['Demolidores official website candidate', 'https://demolidores.com.br/'],
  ['OT Archive Demolidores record', 'https://otarchive.com/server/62cde2f41770eac22ec6ad66'],
  ['OpenTibiaServers live directory', '/'],
  ['OTServList players-online ranking', 'https://otservlist.org/list-server_players_online-desc.html'],
  ['TibiaOTList Global Demolidores record', 'https://tibiaotlist.com/servers/demolidores-net'],
];

export default function DemolidoresWikiPage() {
  return (
    <main className="cyntara-wiki min-h-screen" data-server-slug="demolidores">
      <header className="cyntara-wiki__header">
        <h1>Demolidores</h1>
        <small>From OpenTibiaServers Wiki, the primary Open Tibia server directory</small>
      </header>

      <div className="cyntara-wiki__grid">
        <article className="cyntara-wiki__content">
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="min-w-0 flex-1">
              <p><strong>Demolidores</strong> is a Brazil-associated Open Tibia server recorded as an 8.60, 999× experience, PVP project with a global-map foundation. Its archived record identifies <code>demolidores.com.br:7171</code>, a <code>realmap.otbm</code> map, portals, a custom-client claim, and Allan Rizzotti as both owner and map author.</p>
              <p>This reference separates the available evidence by date and source. The archive preserves a detailed 2022–23 configuration record, while a later public directory snapshot connects the Demolidores identity to <code>sv.demolidores.com.br:7171</code>. Neither source replaces the current operator’s rules, download path, or live server status.</p>
            </div>
            <div className="w-full shrink-0 md:w-64">
              <ServerLogo server={{ name: 'Demolidores', slug: 'demolidores', host: 'demolidores.com.br' }} size="profile" />
            </div>
          </div>

          <nav className="cyntara-wiki__toc" aria-label="Table of Contents">
            <h2>Contents</h2>
            <ol>{contents.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ol>
          </nav>

          <section id="overview">
            <SectionHeading>Overview &amp; identity</SectionHeading>
            <p>Demolidores is best understood as a high-experience, 8.60-era PvP server built over a global or real-map base rather than as a fully documented contemporary ruleset. The archived profile describes “Global com portais!”—a global map with portals—and “Cliente Próprio!”—a custom-client claim. Those descriptions establish the project’s historical identity, but they do not document the current destinations, systems, or client requirements.</p>
            <p>The server’s most specific source is an OT Archive record carrying server, map, and engine metadata. A separate OpenTibiaServers listing snapshot adds a high activity signal for the <code>sv.demolidores.com.br</code> host. Because addresses can change and list data is time-sensitive, this page preserves both signals rather than quietly selecting one as universally current.</p>
            <div className="cyntara-wiki__callout"><strong>Reference scope</strong><p>Demolidores has a strong archival footprint, but a current operator-maintained rules, wiki, client, or changelog surface was not accessible during research. The facts below are therefore dated source records, not an assurance that a feature or address is live today.</p></div>
          </section>

          <section id="facts">
            <SectionHeading>Reference facts</SectionHeading>
            <p>The following table distinguishes archive data from a current-looking directory signal and identifies fields that still require a source owned or verified by the operator.</p>
            <div className="cyntara-wiki__table-wrap"><table className="cyntara-wiki__table"><thead><tr><th>Field</th><th>Recorded value</th><th>Evidence and context</th></tr></thead><tbody>{referenceRows.map(([field, value, context]) => <tr key={field}><th>{field}</th><td><strong>{value}</strong></td><td>{context}</td></tr>)}</tbody></table></div>
          </section>

          <section id="history">
            <SectionHeading>Archive record &amp; longevity</SectionHeading>
            <p>OT Archive shows the Demolidores record as added <strong>07/12/22, 09:09 PM</strong> and updated <strong>11/04/23, 10:00 PM</strong>; the source does not state its date-format convention, so the timestamps are reproduced exactly. It also displays “17 ANOS ONLINE” and the description claim “Online Since 2006.”</p>
            <p>These longevity statements are important to the server’s public history, but they are promotional/archive claims rather than an independent audit of continuous uptime. The same applies to the archived “24hrs Dedicado” wording. They belong in the historical record and should be checked against dated operator announcements before being used as present-tense service guarantees.</p>
            <div className="grid gap-4 md:grid-cols-3">
              <FactCard label="2006 claim" text="The archived description says “Online Since 2006.”" />
              <FactCard label="17 years online" text="A longevity designation displayed directly beneath the archive profile name." />
              <FactCard label="2022–23 archive" text="The detailed record was added in 2022 and shows a 2023 update timestamp." />
            </div>
          </section>

          <section id="world">
            <SectionHeading>Global map &amp; portals</SectionHeading>
            <p>The archived Map Info identifies the map file as <code>realmap.otbm</code>, attributes it to Allan Rizzotti, and reports a 65,000 × 65,000 map. Together with the “Global com portais!” description, this suggests a large real-map-style world adapted with portal travel.</p>
            <p>That phrase is not a substitute for a playable map guide. The reviewed sources do not name portal routes, towns, quest access, hunting areas, NPC changes, or map exclusions. Players should consider individual route guides unverified unless they originate from the active project or include dated in-game evidence.</p>
            <div className="cyntara-wiki__table-wrap"><table className="cyntara-wiki__table"><thead><tr><th>Map field</th><th>Recorded value</th><th>How to interpret it</th></tr></thead><tbody>{mapRows.map(([field, value, context]) => <tr key={field}><th>{field}</th><td>{value}</td><td>{context}</td></tr>)}</tbody></table></div>
          </section>

          <section id="progression">
            <SectionHeading>Progression, PvP &amp; rules</SectionHeading>
            <p>A 999× experience label makes Demolidores a high-experience server in directory terms, yet the available sources do not expose a stage table, skill or magic rate, loot rate, respawn rate, reset policy, or complete vocation guide. Players should avoid treating the headline multiplier as a full progression model.</p>
            <p>Likewise, “PVP” identifies the broad server classification but does not reveal skull behavior, unjustified-kill thresholds, frags, death penalties, banishment, wars, level protections, multi-client limits, bot policy, or event rules. The current rules page is the authority for these decisions.</p>
            <div className="cyntara-wiki__table-wrap"><table className="cyntara-wiki__table"><thead><tr><th>Category</th><th>Recorded profile</th><th>Player context</th></tr></thead><tbody>{configurationRows.map(([category, value, context]) => <tr key={category}><th>{category}</th><td>{value}</td><td>{context}</td></tr>)}</tbody></table></div>
            <div className="cyntara-wiki__callout"><strong>Before committing a character</strong><p>Confirm the current experience stages, skill and magic rates, loot and spawn settings, PvP penalties, protection rules, account restrictions, and any store or donation policies directly from the active project.</p></div>
          </section>

          <section id="client">
            <SectionHeading>Client &amp; connection safety</SectionHeading>
            <p>The archival description claims a “Cliente Próprio!” (custom client), while the technical record identifies Tibia 8.60. The official domain was protected by an access challenge during text-based research, so the live client, supported operating systems, launcher version, account path, file hashes, and support channels could not be independently verified.</p>
            <ol>
              <li>Start at <a href="https://demolidores.com.br/" target="_blank" rel="nofollow noopener noreferrer">demolidores.com.br</a> and verify that the account and download paths remain on an operator-controlled domain.</li>
              <li>Confirm the active login host, port, supported client version, release notes, and any published checksum before installing a game client.</li>
              <li>Read the current rules for automation, multi-clienting, PvP, account recovery, donations, and trading before creating or funding an account.</li>
              <li>Do not disable operating-system or antivirus protections to force a client to start; ask the operator for signed releases, hashes, or documented support instead.</li>
              <li>Compare the live world status with multiple sources immediately before joining because directory counts and hosts change.</li>
            </ol>
            <div className="cyntara-wiki__callout"><strong>Known connection records</strong><p>The archive shows <code>demolidores.com.br:7171</code>; the directory snapshot uses <code>sv.demolidores.com.br:7171</code>. They may describe different moments or endpoints of the same service, but this reference does not assume equivalence without operator confirmation.</p></div>
          </section>

          <section id="activity">
            <SectionHeading>Activity signals &amp; record differences</SectionHeading>
            <p>Open Tibia listings are useful discovery tools, but each listing captures a point in time and may use a different host, protocol, country, or branding. The table preserves the three observed record types without combining incompatible data into a misleading single “live” profile.</p>
            <div className="cyntara-wiki__table-wrap"><table className="cyntara-wiki__table"><thead><tr><th>Source signal</th><th>Host</th><th>Profile</th><th>Activity field</th><th>Interpretation</th></tr></thead><tbody>{activityRows.map(([source, host, profile, activity, note]) => <tr key={source}><th>{source}</th><td><code>{host}</code></td><td>{profile}</td><td>{activity}</td><td>{note}</td></tr>)}</tbody></table></div>
            <div className="cyntara-wiki__callout"><strong>Similar-name listing note</strong><p>TibiaOTList presents “Global Demolidores” at <code>demolidores.net:7171</code> as a Poland-hosted 7.10 listing with its own live-style player count. The different host, country, and version mean it is recorded here as a separate similarly named entry, not treated as a successor or current endpoint for Demolidores.</p></div>
          </section>

          <section id="start">
            <SectionHeading>How to start safely</SectionHeading>
            <p>The safest first session is a short verification pass rather than an assumption that an archived or ranked listing is current. Begin with the official domain candidate, compare its connection information with the two known host records, then read current policy pages before downloading or spending money.</p>
            <div className="grid gap-4 md:grid-cols-2">
              <FactCard label="Good fit if" text="You are looking for a high-experience 8.60-era global-map PvP server and are comfortable independently verifying its current rules, client, and live endpoint." />
              <FactCard label="Check first" text="Current client source, active host, account page, PvP penalties, rates beyond experience, staff contact, changelog, community links, and payment policies." />
            </div>
          </section>

          <section id="sources">
            <SectionHeading>Sources &amp; verification</SectionHeading>
            <p>The OT Archive profile is the primary source for the historical configuration, map metadata, engine label, ownership field, and historical promotional language. The OpenTibiaServers directory snapshot provides a separate activity and host signal. The official website candidate remains the appropriate place to verify current service details, though automated text research reached an access challenge rather than a readable rules or download page.</p>
            <div className="grid gap-3 md:grid-cols-2">
              <SourceLink href="https://otarchive.com/server/62cde2f41770eac22ec6ad66" label="OT Archive: Demolidores record" />
              <SourceLink href="https://demolidores.com.br/" label="Demolidores official website candidate" />
              <SourceLink href="https://otservlist.org/list-server_players_online-desc.html" label="OTServList public ranking" />
              <SourceLink href="https://tibiaotlist.com/servers/demolidores-net" label="TibiaOTList: Global Demolidores" />
            </div>
            <div className="cyntara-wiki__callout"><strong>Evidence standard</strong><p>Current claims should be supported by an operator-controlled page, dated announcement, verified live status, or clearly attributed in-game evidence. Archived descriptions and public directories remain useful historical sources, but should not be silently promoted to verified current rules.</p></div>
          </section>

          <section id="external-links">
            <SectionHeading>External links</SectionHeading>
            <ul>{externalLinks.map(([label, href]) => <li key={href}><ExternalLink href={href}>{label}</ExternalLink></li>)}</ul>
          </section>
        </article>

        <aside className="cyntara-wiki__sidebar">
          <div className="cyntara-wiki__infobox">
            <div className="cyntara-wiki__infobox-header">Demolidores</div>
            <ServerLogo server={{ name: 'Demolidores', slug: 'demolidores', host: 'demolidores.com.br' }} size="profile" />
            <table><tbody>
              <tr><th>Category</th><td>High-EXP Open Tibia</td></tr>
              <tr><th>Protocol</th><td>8.60 archive record</td></tr>
              <tr><th>Experience</th><td>999× archive record</td></tr>
              <tr><th>PvP</th><td>PVP classification</td></tr>
              <tr><th>Archived host</th><td><code>demolidores.com.br:7171</code></td></tr>
              <tr><th>Directory host</th><td><code>sv.demolidores.com.br:7171</code></td></tr>
              <tr><th>Region signal</th><td>Brazil</td></tr>
              <tr><th>Map</th><td>realmap.otbm · 65,000 × 65,000</td></tr>
              <tr><th>Map style</th><td>Global map with portals claim</td></tr>
              <tr><th>Owner field</th><td>Allan Rizzotti</td></tr>
              <tr><th>Engine</th><td>Demolidores 2.0</td></tr>
              <tr><th>Profile status</th><td>Archive-backed; live details need verification</td></tr>
              <tr><th>Website</th><td><a href="https://demolidores.com.br/" target="_blank" rel="nofollow noopener noreferrer">demolidores.com.br</a></td></tr>
            </tbody></table>
          </div>
          <div className="cyntara-wiki__callout"><strong>Before downloading</strong><p>Verify the active client and connection details from an operator-controlled page. The historical host and later directory host are both preserved above because their relationship has not been independently confirmed.</p><a href="https://demolidores.com.br/" target="_blank" rel="nofollow noopener noreferrer">Open website candidate</a></div>
          <div className="cyntara-wiki__recommended"><h3>Explore the directory</h3><p>Compare Demolidores with other Open Tibia worlds by protocol, PvP type, location, uptime, rates, and player activity.</p><a className="cyntara-wiki__button" href="/?search=Demolidores">Browse similar servers</a></div>
        </aside>
      </div>
    </main>
  );
}

function SectionHeading({ children }) {
  return <div className="cyntara-wiki__section-heading"><h2>{children}</h2></div>;
}

function FactCard({ label, text }) {
  return <div className="rounded border border-black bg-white p-4"><h3 className="text-base font-bold text-black">{label}</h3><p className="mt-2 text-sm leading-7 text-black">{text}</p></div>;
}

function ExternalLink({ href, children }) {
  const external = href.startsWith('http');
  return <a href={href} target={external ? '_blank' : undefined} rel={external ? 'nofollow noopener noreferrer' : undefined}>{children}</a>;
}

function SourceLink({ href, label }) {
  return <ExternalLink href={href}><span className="block rounded border border-black bg-white p-4 font-bold hover:no-underline">{label}</span></ExternalLink>;
}
