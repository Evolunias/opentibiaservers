import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-with-reviews-guide');
}

export default function Tibia13WithReviewsGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-with-reviews-guide" />;
}
