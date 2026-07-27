import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-oldera-discord');
}

export default function WithReviewsOlderaDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-oldera-discord" />;
}
