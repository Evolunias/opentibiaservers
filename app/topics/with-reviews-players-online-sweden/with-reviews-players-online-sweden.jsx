import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-players-online-sweden');
}

export default function WithReviewsPlayersOnlineSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-players-online-sweden" />;
}
