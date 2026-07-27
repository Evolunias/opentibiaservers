import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-review-sweden');
}

export default function WithActivePlayersReviewSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-review-sweden" />;
}
