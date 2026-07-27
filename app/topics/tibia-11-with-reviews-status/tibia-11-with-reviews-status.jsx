import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-reviews-status');
}

export default function Tibia11WithReviewsStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-reviews-status" />;
}
