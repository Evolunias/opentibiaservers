import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-with-reviews-status');
}

export default function Tibia86WithReviewsStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-with-reviews-status" />;
}
