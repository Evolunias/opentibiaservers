import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-review-south-america');
}

export default function WithActivePlayersReviewSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-review-south-america" />;
}
