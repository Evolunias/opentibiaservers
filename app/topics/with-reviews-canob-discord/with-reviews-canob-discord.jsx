import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-canob-discord');
}

export default function WithReviewsCanobDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-canob-discord" />;
}
