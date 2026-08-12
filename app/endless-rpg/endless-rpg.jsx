import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-endless-rpg",
  "slug": "endless-rpg",
  "name": "Endless RPG",
  "host": "login.endlessrpg.org",
  "ip": "login.endlessrpg.org",
  "port": 7171,
  "location": "Germany",
  "version": "10",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 33,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/germany-custom-endless-rpg.304088/",
  "source_url": "https://otland.net/threads/germany-custom-endless-rpg.304088/",
  "website_url": "https://endlessrpg.org/",
  "external_launch_url": "https://endlessrpg.org/",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Endless RPG",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:25.692Z",
  "last_seen_at": "2026-03-05T16:10:48+0100",
  "last_check": "2026-07-28T02:51:25.692Z",
  "official_summary": "Endless RPG enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: Germany, version hint: 10, server address: login.endlessrpg.org, port 7171, official website reachable during import, 32 replies, 4,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Endless RPG is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://endlessrpg.org/",
    "Official website responded with HTTP 200",
    "Server address: login.endlessrpg.org",
    "Server port: 7171",
    "Thread author: Mattzon194",
    "Original post date: 3/5/2026",
    "Forum discussion: 32 replies",
    "Thread visibility: 4,000 views",
    "Parsed version/client hint: 10",
    "Parsed region hint: Germany"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "Germany",
    "10",
    "Germany",
    "CUSTOM"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://endlessrpg.org/",
      "label": "Endless RPG official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/germany-custom-endless-rpg.304088/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://endlessrpg.org/",
      "label": "https://endlessrpg.org/"
    },
    {
      "type": "source_link",
      "url": "https://github.com/none",
      "label": "none"
    },
    {
      "type": "source_link",
      "url": "https://www.virustotal.com/gui/search/da268ce7db408db203d76ab898a0e0e8",
      "label": "VirusTotal"
    }
  ],
  "faq_items": [
    {
      "question": "Is Endless RPG verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://endlessrpg.org/ as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Endless RPG?",
      "answer": "Start with https://endlessrpg.org/ and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Endless RPG exposes https://endlessrpg.org/ from its OtLand Server Gala source context. The import checked that site during the crawl and recorded a reachable HTTP 200 response. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function EndlessRpgPage() {
  return <CuratedGuideArticle page={page} />;
}
