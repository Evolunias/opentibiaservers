import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-review-usa');
}

export default function WithActivePlayersReviewUsaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-review-usa" />;
}
