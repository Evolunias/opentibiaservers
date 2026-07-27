import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-review-north-america');
}

export default function WithActivePlayersReviewNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-review-north-america" />;
}
