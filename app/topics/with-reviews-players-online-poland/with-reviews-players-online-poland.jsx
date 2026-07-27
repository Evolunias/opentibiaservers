import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-players-online-poland');
}

export default function WithReviewsPlayersOnlinePolandKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-players-online-poland" />;
}
