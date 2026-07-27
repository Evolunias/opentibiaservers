import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-players-online-latin-america');
}

export default function WithReviewsPlayersOnlineLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-players-online-latin-america" />;
}
