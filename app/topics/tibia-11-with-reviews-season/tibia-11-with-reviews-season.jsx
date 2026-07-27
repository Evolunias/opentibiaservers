import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-reviews-season');
}

export default function Tibia11WithReviewsSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-reviews-season" />;
}
