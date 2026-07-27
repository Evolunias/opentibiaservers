import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-cyntara-discord');
}

export default function WithReviewsCyntaraDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-cyntara-discord" />;
}
