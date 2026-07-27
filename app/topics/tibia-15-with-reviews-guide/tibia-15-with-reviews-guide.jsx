import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-with-reviews-guide');
}

export default function Tibia15WithReviewsGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-with-reviews-guide" />;
}
