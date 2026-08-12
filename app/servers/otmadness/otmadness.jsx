import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-otmadness",
  "slug": "otmadness",
  "name": "OTMadness",
  "host": "OTMadness.com",
  "ip": "OTMadness.com",
  "port": 7171,
  "location": "Canada",
  "version": "13",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 72,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/canada-custom-otmadness.286276/",
  "source_url": "https://otland.net/threads/canada-custom-otmadness.286276/",
  "website_url": "https://otmadness.com/",
  "external_launch_url": "https://otmadness.com/",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "OTMadness",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:23.803Z",
  "last_seen_at": "2023-09-15T19:13:07+0200",
  "last_check": "2026-07-28T02:51:23.803Z",
  "official_summary": "OTMadness enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: Canada, version hint: 13, server address: OTMadness.com, port 7171, 174 replies, 38,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "OTMadness is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://otmadness.com/",
    "Server address: OTMadness.com",
    "Server port: 7171",
    "Thread author: Addams",
    "Original post date: 9/16/2023",
    "Forum discussion: 174 replies",
    "Thread visibility: 38,000 views",
    "Parsed version/client hint: 13",
    "Parsed region hint: Canada"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "Canada",
    "13",
    "Canada",
    "Custom"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://otmadness.com/",
      "label": "OTMadness official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/canada-custom-otmadness.286276/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://otmadness.com/",
      "label": "https://otmadness.com/"
    },
    {
      "type": "source_link",
      "url": "https://github.com/molegacy",
      "label": "molegacy"
    },
    {
      "type": "source_link",
      "url": "https://www.twitch.tv/molegacy1",
      "label": "molegacy1"
    }
  ],
  "faq_items": [
    {
      "question": "Is OTMadness verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://otmadness.com/ as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm OTMadness?",
      "answer": "Start with https://otmadness.com/ and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "OTMadness exposes https://otmadness.com/ from its OtLand Server Gala source context. The import checked that site during the crawl and recorded the website candidate for manual verification. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function OtmadnessServerReviewPage() {
  return <CuratedGuideArticle page={page} />;
}
