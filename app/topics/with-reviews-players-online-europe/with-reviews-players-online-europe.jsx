import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-players-online-europe');
}

export default function WithReviewsPlayersOnlineEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-players-online-europe" />;
}
