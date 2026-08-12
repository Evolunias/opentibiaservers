import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-roxor-1337-8-6",
  "slug": "roxor-1337-8-6",
  "name": "Roxor 1337 8.6",
  "host": "roxor1337.zapto.org",
  "ip": "roxor1337.zapto.org",
  "port": null,
  "location": "UK",
  "version": null,
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 113,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/uk-roxor-1337-8-6.249065/",
  "source_url": "https://otland.net/threads/uk-roxor-1337-8-6.249065/",
  "website_url": "http://roxor1337.zapto.org/",
  "external_launch_url": "http://roxor1337.zapto.org/",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Roxor 1337 8.6",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:27.652Z",
  "last_seen_at": "2017-02-02T14:17:34+0100",
  "last_check": "2026-07-28T02:51:27.652Z",
  "official_summary": "Roxor 1337 8.6 enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: UK, server address: roxor1337.zapto.org, 7 replies, 3,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Roxor 1337 8.6 is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: http://roxor1337.zapto.org/",
    "Server address: roxor1337.zapto.org",
    "Thread author: Loth Gena",
    "Original post date: 2/2/2017",
    "Forum discussion: 7 replies",
    "Thread visibility: 3,000 views",
    "Parsed region hint: UK"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "UK",
    "UK"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "http://roxor1337.zapto.org/",
      "label": "Roxor 1337 8.6 official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/uk-roxor-1337-8-6.249065/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://github.com/Jacobs63",
      "label": "Jacobs63"
    }
  ],
  "faq_items": [
    {
      "question": "Is Roxor 1337 8.6 verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes http://roxor1337.zapto.org/ as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Roxor 1337 8.6?",
      "answer": "Start with http://roxor1337.zapto.org/ and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Roxor 1337 8.6 exposes http://roxor1337.zapto.org/ from its OtLand Server Gala source context. The import checked that site during the crawl and recorded the website candidate for manual verification. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function Roxor133786ServerReviewPage() {
  return <CuratedGuideArticle page={page} />;
}
