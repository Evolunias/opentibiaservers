import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-realesta-discord');
}

export default function WithReviewsRealestaDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-realesta-discord" />;
}
