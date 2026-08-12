import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-grimhaven-ot",
  "slug": "grimhaven-ot",
  "name": "Grimhaven OT",
  "host": "login.grimhaven.net",
  "ip": "login.grimhaven.net",
  "port": 7171,
  "location": "USA",
  "version": "8",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 17,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/usa-custom-rl-grimhaven-ot-randomized-dungeons-item-attributes-quests-with-mechanics-custom-systems-starting-may-1st-19-00-cest.287291/",
  "source_url": "https://otland.net/threads/usa-custom-rl-grimhaven-ot-randomized-dungeons-item-attributes-quests-with-mechanics-custom-systems-starting-may-1st-19-00-cest.287291/",
  "website_url": "https://grimhaven.net/",
  "external_launch_url": "https://grimhaven.net/",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Grimhaven OT",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:25.692Z",
  "last_seen_at": "2023-12-12T15:27:42+0100",
  "last_check": "2026-07-28T02:51:25.692Z",
  "official_summary": "Grimhaven OT enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: USA, version hint: 8, server address: login.grimhaven.net, port 7171, official website reachable during import, 77 replies, 18,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Grimhaven OT is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://grimhaven.net/",
    "Official website responded with HTTP 200",
    "Server address: login.grimhaven.net",
    "Server port: 7171",
    "Thread author: Kiman",
    "Original post date: 12/12/2023",
    "Forum discussion: 77 replies",
    "Thread visibility: 18,000 views",
    "Parsed version/client hint: 8",
    "Parsed region hint: USA"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "USA",
    "8",
    "USA",
    "Custom RL"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://grimhaven.net/",
      "label": "Grimhaven OT official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/usa-custom-rl-grimhaven-ot-randomized-dungeons-item-attributes-quests-with-mechanics-custom-systems-starting-may-1st-19-00-cest.287291/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://grimhaven.net/",
      "label": "https://grimhaven.net/"
    }
  ],
  "faq_items": [
    {
      "question": "Is Grimhaven OT verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://grimhaven.net/ as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Grimhaven OT?",
      "answer": "Start with https://grimhaven.net/ and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Grimhaven OT exposes https://grimhaven.net/ from its OtLand Server Gala source context. The import checked that site during the crawl and recorded a reachable HTTP 200 response. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function GrimhavenOtServerReviewPage() {
  return <CuratedGuideArticle page={page} />;
}
