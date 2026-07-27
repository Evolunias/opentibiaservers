import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-reviews-guide');
}

export default function Tibia11WithReviewsGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-reviews-guide" />;
}
