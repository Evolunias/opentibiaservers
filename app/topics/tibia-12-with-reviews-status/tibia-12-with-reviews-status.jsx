import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-with-reviews-status');
}

export default function Tibia12WithReviewsStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-with-reviews-status" />;
}
