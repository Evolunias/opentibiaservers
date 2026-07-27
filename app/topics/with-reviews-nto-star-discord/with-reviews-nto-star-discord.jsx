import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-nto-star-discord');
}

export default function WithReviewsNtoStarDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-nto-star-discord" />;
}
