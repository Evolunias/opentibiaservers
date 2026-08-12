import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-dawn-port",
  "slug": "dawn-port",
  "name": "Dawn-Port",
  "host": "dawn-port.duckdns.org",
  "ip": "dawn-port.duckdns.org",
  "port": 7171,
  "location": "POLAND",
  "version": "14.12",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 111,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/poland-custom-dawn-port-lowlvl-pk-rpg-no-p2w-dawnport-rookgaard-mysteries-launch-june-26-2026.304783/",
  "source_url": "https://otland.net/threads/poland-custom-dawn-port-lowlvl-pk-rpg-no-p2w-dawnport-rookgaard-mysteries-launch-june-26-2026.304783/",
  "website_url": "https://dawn-port.duckdns.org/",
  "external_launch_url": "https://dawn-port.duckdns.org/",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Dawn-Port",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:24.243Z",
  "last_seen_at": "2026-06-19T19:37:33+0200",
  "last_check": "2026-07-28T02:51:24.243Z",
  "official_summary": "Dawn-Port enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: POLAND, version hint: 14.12, server address: dawn-port.duckdns.org, port 7171, 9 replies, 829 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Dawn-Port is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://dawn-port.duckdns.org/",
    "Server address: dawn-port.duckdns.org",
    "Server port: 7171",
    "Thread author: Otsserwer",
    "Original post date: 6/20/2026",
    "Forum discussion: 9 replies",
    "Thread visibility: 829 views",
    "Parsed version/client hint: 14.12",
    "Parsed region hint: POLAND"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "POLAND",
    "14.12",
    "POLAND",
    "CUSTOM"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://dawn-port.duckdns.org/",
      "label": "Dawn-Port official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/poland-custom-dawn-port-lowlvl-pk-rpg-no-p2w-dawnport-rookgaard-mysteries-launch-june-26-2026.304783/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://dawn-port.duckdns.org/",
      "label": "https://dawn-port.duckdns.org/"
    },
    {
      "type": "source_link",
      "url": "https://github.com/Otsserwer",
      "label": "Otsserwer"
    },
    {
      "type": "source_link",
      "url": "https://www.virustotal.com/gui/search/5676ccac269d83d0aa76f97516a0a84e",
      "label": "VirusTotal"
    },
    {
      "type": "source_link",
      "url": "https://www.virustotal.com/gui/search/84411a488b54807d49dba84b7426488b",
      "label": "VirusTotal"
    },
    {
      "type": "source_link",
      "url": "https://www.virustotal.com/gui/search/8da171495f6f452185278cb34953f03d",
      "label": "VirusTotal"
    },
    {
      "type": "source_link",
      "url": "https://www.virustotal.com/gui/search/6cd4621173e1c7c7b78b94091e659c65",
      "label": "VirusTotal"
    }
  ],
  "faq_items": [
    {
      "question": "Is Dawn-Port verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://dawn-port.duckdns.org/ as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Dawn-Port?",
      "answer": "Start with https://dawn-port.duckdns.org/ and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Dawn-Port exposes https://dawn-port.duckdns.org/ from its OtLand Server Gala source context. The import checked that site during the crawl and recorded the website candidate for manual verification. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
    },
    {
      "title": "Why this OtLand source matters",
      "body": "OtLand Server Gala is one of the longest-running community advertising boards for Open Tibia servers. A thread there can preserve launch positioning, owner updates, community replies, screenshots, and player discussion that a compact server-list row cannot show."
    },
    {
      "title": "What this page still needs from the community",
      "body": "This record should be expanded with owner-confirmed homepage links, screenshots, client/download details, rates, PvP rules, update history, Discord or forum links, and player reviews. Until those are verified, the page keeps source facts separate from missing details."
    }
  ]
};

export function generateMetadata() {
  return buildArticleMetadata(page);
}

export default function DawnPortServerReviewPage() {
  return <CuratedGuideArticle page={page} />;
}
