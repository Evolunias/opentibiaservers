import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-with-reviews-guide');
}

export default function Tibia854WithReviewsGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-with-reviews-guide" />;
}
