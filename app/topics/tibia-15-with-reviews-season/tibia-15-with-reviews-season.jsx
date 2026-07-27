import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-with-reviews-season');
}

export default function Tibia15WithReviewsSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-with-reviews-season" />;
}
