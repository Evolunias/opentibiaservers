import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-players-online-uk');
}

export default function WithReviewsPlayersOnlineUkKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-players-online-uk" />;
}
