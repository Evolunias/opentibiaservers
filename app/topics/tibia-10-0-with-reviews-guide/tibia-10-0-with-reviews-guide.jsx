import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-with-reviews-guide');
}

export default function Tibia100WithReviewsGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-with-reviews-guide" />;
}
