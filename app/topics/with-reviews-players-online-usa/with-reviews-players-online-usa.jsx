import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-players-online-usa');
}

export default function WithReviewsPlayersOnlineUsaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-players-online-usa" />;
}
