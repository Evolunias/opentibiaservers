import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-gunzodus",
  "slug": "gunzodus",
  "name": "Gunzodus",
  "host": "gunzodus.net",
  "ip": "gunzodus.net",
  "port": 7171,
  "location": "France",
  "version": "10",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 65,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/france-14-00-gunzodus-candia-island-inferniarch-weapons-sets-podzilla-quest-winter-update-2024-bakragore-essence-3.263437/",
  "source_url": "https://otland.net/threads/france-14-00-gunzodus-candia-island-inferniarch-weapons-sets-podzilla-quest-winter-update-2024-bakragore-essence-3.263437/",
  "website_url": "https://www.gunzodus.net/",
  "external_launch_url": "https://www.gunzodus.net/",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Gunzodus",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:23.277Z",
  "last_seen_at": "2019-03-10T20:01:36+0100",
  "last_check": "2026-07-28T02:51:23.277Z",
  "official_summary": "Gunzodus enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: France, version hint: 10, server address: gunzodus.net, port 7171, 873 replies, 339,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Gunzodus is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://www.gunzodus.net/",
    "Server address: gunzodus.net",
    "Server port: 7171",
    "Thread author: ellvo",
    "Original post date: 3/11/2019",
    "Forum discussion: 873 replies",
    "Thread visibility: 339,000 views",
    "Parsed version/client hint: 10",
    "Parsed region hint: France"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "France",
    "10",
    "France",
    "14.00+"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://www.gunzodus.net/",
      "label": "Gunzodus official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/france-14-00-gunzodus-candia-island-inferniarch-weapons-sets-podzilla-quest-winter-update-2024-bakragore-essence-3.263437/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://www.gunzodus.net/",
      "label": "https://www.gunzodus.net/"
    }
  ],
  "faq_items": [
    {
      "question": "Is Gunzodus verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://www.gunzodus.net/ as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Gunzodus?",
      "answer": "Start with https://www.gunzodus.net/ and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Gunzodus exposes https://www.gunzodus.net/ from its OtLand Server Gala source context. The import checked that site during the crawl and recorded the website candidate for manual verification. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function GunzodusServerReviewPage() {
  return <CuratedGuideArticle page={page} />;
}
