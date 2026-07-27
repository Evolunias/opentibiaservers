import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-realera-discord');
}

export default function WithReviewsRealeraDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-realera-discord" />;
}
