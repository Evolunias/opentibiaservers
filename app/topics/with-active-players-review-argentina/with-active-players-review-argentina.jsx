import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-review-argentina');
}

export default function WithActivePlayersReviewArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-review-argentina" />;
}
