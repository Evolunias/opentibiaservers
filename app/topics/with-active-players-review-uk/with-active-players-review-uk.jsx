import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-review-uk');
}

export default function WithActivePlayersReviewUkKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-review-uk" />;
}
