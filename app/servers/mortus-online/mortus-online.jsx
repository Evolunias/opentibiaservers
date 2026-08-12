import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-mortus-online",
  "slug": "mortus-online",
  "name": "MORTUS.ONLINE",
  "host": "mortus.online",
  "ip": "mortus.online",
  "port": 7171,
  "location": "FRANCE",
  "version": "8.0",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 45,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/france-8-0-mortus-online-first-edition-09-04-2026-18-00-cet.304105/",
  "source_url": "https://otland.net/threads/france-8-0-mortus-online-first-edition-09-04-2026-18-00-cet.304105/",
  "website_url": "https://mortus.online/",
  "external_launch_url": "https://mortus.online/",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "MORTUS.ONLINE",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:26.195Z",
  "last_seen_at": "2026-03-07T23:34:25+0100",
  "last_check": "2026-07-28T02:51:26.195Z",
  "official_summary": "MORTUS.ONLINE enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: FRANCE, version hint: 8.0, server address: mortus.online, port 7171, official website reachable during import, 17 replies, 2,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "MORTUS.ONLINE is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://mortus.online/",
    "Official website responded with HTTP 200",
    "Server address: mortus.online",
    "Server port: 7171",
    "Thread author: MortusOnline",
    "Original post date: 3/8/2026",
    "Forum discussion: 17 replies",
    "Thread visibility: 2,000 views",
    "Parsed version/client hint: 8.0",
    "Parsed region hint: FRANCE"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "FRANCE",
    "8.0",
    "FRANCE",
    "8.0"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://mortus.online/",
      "label": "MORTUS.ONLINE official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/france-8-0-mortus-online-first-edition-09-04-2026-18-00-cet.304105/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://mortus.online/",
      "label": "https://mortus.online/"
    },
    {
      "type": "source_link",
      "url": "https://www.virustotal.com/gui/search/a1447f9871ec5cd20af562837b616a05",
      "label": "VirusTotal"
    },
    {
      "type": "source_link",
      "url": "https://www.virustotal.com/gui/search/18bd7c48b23c3ea2d273713f52dc5367",
      "label": "VirusTotal"
    },
    {
      "type": "source_link",
      "url": "https://www.virustotal.com/gui/search/3b8274456e5c6508d03cbd73b9e0bb46",
      "label": "VirusTotal"
    },
    {
      "type": "source_link",
      "url": "https://www.virustotal.com/gui/search/caec932a3e9f8fae2954f860a812fc21",
      "label": "VirusTotal"
    },
    {
      "type": "source_link",
      "url": "https://www.virustotal.com/gui/search/acf74cab0065a1bfde3bb03c5cd0fe94",
      "label": "VirusTotal"
    }
  ],
  "faq_items": [
    {
      "question": "Is MORTUS.ONLINE verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://mortus.online/ as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm MORTUS.ONLINE?",
      "answer": "Start with https://mortus.online/ and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "MORTUS.ONLINE exposes https://mortus.online/ from its OtLand Server Gala source context. The import checked that site during the crawl and recorded a reachable HTTP 200 response. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function MortusOnlineServerReviewPage() {
  return <CuratedGuideArticle page={page} />;
}
