import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-with-reviews-guide');
}

export default function Tibia86WithReviewsGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-with-reviews-guide" />;
}
