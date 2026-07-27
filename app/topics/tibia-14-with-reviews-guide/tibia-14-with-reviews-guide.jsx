import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-with-reviews-guide');
}

export default function Tibia14WithReviewsGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-with-reviews-guide" />;
}
