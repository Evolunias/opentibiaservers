import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-review-brazil');
}

export default function WithActivePlayersReviewBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-review-brazil" />;
}
