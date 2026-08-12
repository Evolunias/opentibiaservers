import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-20th-february-2026-18-00",
  "slug": "20th-february-2026-18-00",
  "name": "20th February 2026 18:00",
  "host": "ezodus.net",
  "ip": "ezodus.net",
  "port": 7171,
  "location": "France",
  "version": "10.00",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 68,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/france-10-00-15-22-start-20th-february-2026-18-00-castle-war-event-tc-rl-trade-allowed-unhallowed-crypt-weapon-proficiency-bloodfire-g.268643/",
  "source_url": "https://otland.net/threads/france-10-00-15-22-start-20th-february-2026-18-00-castle-war-event-tc-rl-trade-allowed-unhallowed-crypt-weapon-proficiency-bloodfire-g.268643/",
  "website_url": "https://www.ezodus.net/",
  "external_launch_url": "https://www.ezodus.net/",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "20th February 2026 18:00",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:27.139Z",
  "last_seen_at": "2020-02-18T19:58:36+0100",
  "last_check": "2026-07-28T02:51:27.139Z",
  "official_summary": "20th February 2026 18:00 enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: France, version hint: 10.00, server address: ezodus.net, port 7171, 388 replies, 65,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "20th February 2026 18:00 is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://www.ezodus.net/",
    "Server address: ezodus.net",
    "Server port: 7171",
    "Thread author: ellvo",
    "Original post date: 2/19/2020",
    "Forum discussion: 388 replies",
    "Thread visibility: 65,000 views",
    "Parsed version/client hint: 10.00",
    "Parsed region hint: France"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "France",
    "10.00",
    "France",
    "10.00-15.22"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://www.ezodus.net/",
      "label": "20th February 2026 18:00 official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/france-10-00-15-22-start-20th-february-2026-18-00-castle-war-event-tc-rl-trade-allowed-unhallowed-crypt-weapon-proficiency-bloodfire-g.268643/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://www.ezodus.net/",
      "label": "https://www.ezodus.net/"
    }
  ],
  "faq_items": [
    {
      "question": "Is 20th February 2026 18:00 verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://www.ezodus.net/ as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm 20th February 2026 18:00?",
      "answer": "Start with https://www.ezodus.net/ and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "20th February 2026 18:00 exposes https://www.ezodus.net/ from its OtLand Server Gala source context. The import checked that site during the crawl and recorded the website candidate for manual verification. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function Server20thFebruary20261800ServerReviewPage() {
  return <CuratedGuideArticle page={page} />;
}
