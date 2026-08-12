import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-naruto-the-shinobi-war",
  "slug": "naruto-the-shinobi-war",
  "name": "Naruto the Shinobi War",
  "host": "ntsw.pl",
  "ip": "ntsw.pl",
  "port": 8000,
  "location": "Poland",
  "version": "10",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 48,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/poland-custom-naruto-the-shinobi-war-31-vocations-08-03-2019.263227/",
  "source_url": "https://otland.net/threads/poland-custom-naruto-the-shinobi-war-31-vocations-08-03-2019.263227/",
  "website_url": "http://web.ntsw.pl/",
  "external_launch_url": "http://web.ntsw.pl/",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Naruto the Shinobi War",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:27.139Z",
  "last_seen_at": "2019-02-28T00:15:38+0100",
  "last_check": "2026-07-28T02:51:27.139Z",
  "official_summary": "Naruto the Shinobi War enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: Poland, version hint: 10, server address: ntsw.pl, port 8000, official website reachable during import, 13 replies, 4,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Naruto the Shinobi War is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: http://web.ntsw.pl/",
    "Official website responded with HTTP 200",
    "Server address: ntsw.pl",
    "Server port: 8000",
    "Thread author: Erexo",
    "Original post date: 2/28/2019",
    "Forum discussion: 13 replies",
    "Thread visibility: 4,000 views",
    "Parsed version/client hint: 10",
    "Parsed region hint: Poland"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "Poland",
    "10",
    "Poland",
    "Custom"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "http://web.ntsw.pl/",
      "label": "Naruto the Shinobi War official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/poland-custom-naruto-the-shinobi-war-31-vocations-08-03-2019.263227/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "http://web.ntsw.pl/",
      "label": "http://web.ntsw.pl/"
    },
    {
      "type": "source_link",
      "url": "https://github.com/Erexo",
      "label": "Erexo"
    }
  ],
  "faq_items": [
    {
      "question": "Is Naruto the Shinobi War verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes http://web.ntsw.pl/ as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Naruto the Shinobi War?",
      "answer": "Start with http://web.ntsw.pl/ and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Naruto the Shinobi War exposes http://web.ntsw.pl/ from its OtLand Server Gala source context. The import checked that site during the crawl and recorded a reachable HTTP 200 response. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function NarutoTheShinobiWarServerReviewPage() {
  return <CuratedGuideArticle page={page} />;
}
