import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-with-reviews-status');
}

export default function Tibia14WithReviewsStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-with-reviews-status" />;
}
