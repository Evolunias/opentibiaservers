import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-players-online-argentina');
}

export default function WithReviewsPlayersOnlineArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-players-online-argentina" />;
}
