import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-players-online-brazil');
}

export default function WithReviewsPlayersOnlineBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-players-online-brazil" />;
}
