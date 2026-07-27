import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-review-germany');
}

export default function WithActivePlayersReviewGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-review-germany" />;
}
