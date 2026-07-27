import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-with-reviews-status');
}

export default function Tibia15WithReviewsStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-with-reviews-status" />;
}
