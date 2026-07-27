import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-dura-online-discord');
}

export default function WithReviewsDuraOnlineDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-dura-online-discord" />;
}
