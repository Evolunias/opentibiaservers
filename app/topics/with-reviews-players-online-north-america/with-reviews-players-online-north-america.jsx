import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-players-online-north-america');
}

export default function WithReviewsPlayersOnlineNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-players-online-north-america" />;
}
