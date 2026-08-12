import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-custom-map",
  "slug": "custom-map",
  "name": "Custom map",
  "host": "thunderia.pl",
  "ip": "thunderia.pl",
  "port": 7171,
  "location": "POLAND",
  "version": "8",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 57,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/poland-8-0-thunderia-ot-custom-map.304613/",
  "source_url": "https://otland.net/threads/poland-8-0-thunderia-ot-custom-map.304613/",
  "website_url": "https://thunderia.pl",
  "external_launch_url": "https://thunderia.pl",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Custom map",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:24.705Z",
  "last_seen_at": "2026-05-23T17:32:12+0200",
  "last_check": "2026-07-28T02:51:24.705Z",
  "official_summary": "Custom map enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: POLAND, version hint: 8, server address: thunderia.pl, port 7171, official website reachable during import, 6 replies, 1,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Custom map is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://thunderia.pl",
    "Official website responded with HTTP 200",
    "Server address: thunderia.pl",
    "Server port: 7171",
    "Thread author: devizin",
    "Original post date: 5/23/2026",
    "Forum discussion: 6 replies",
    "Thread visibility: 1,000 views",
    "Parsed version/client hint: 8",
    "Parsed region hint: POLAND"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "POLAND",
    "8",
    "POLAND",
    "8.0",
    "Thunderia OT"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://thunderia.pl",
      "label": "Custom map official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/poland-8-0-thunderia-ot-custom-map.304613/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://thunderia.pl",
      "label": "https://thunderia.pl"
    }
  ],
  "faq_items": [
    {
      "question": "Is Custom map verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://thunderia.pl as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Custom map?",
      "answer": "Start with https://thunderia.pl and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Custom map exposes https://thunderia.pl from its OtLand Server Gala source context. The import checked that site during the crawl and recorded a reachable HTTP 200 response. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function CustomMapPage() {
  return <CuratedGuideArticle page={page} />;
}
