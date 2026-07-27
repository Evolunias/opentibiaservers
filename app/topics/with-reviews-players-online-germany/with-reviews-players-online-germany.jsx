import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-players-online-germany');
}

export default function WithReviewsPlayersOnlineGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-players-online-germany" />;
}
