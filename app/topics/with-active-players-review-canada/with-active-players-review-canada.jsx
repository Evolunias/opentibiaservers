import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-review-canada');
}

export default function WithActivePlayersReviewCanadaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-review-canada" />;
}
