import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-with-reviews-guide');
}

export default function Tibia772WithReviewsGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-with-reviews-guide" />;
}
