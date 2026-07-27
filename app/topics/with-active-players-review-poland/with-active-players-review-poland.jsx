import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-review-poland');
}

export default function WithActivePlayersReviewPolandKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-review-poland" />;
}
