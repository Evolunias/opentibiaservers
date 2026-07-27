import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-with-reviews-status');
}

export default function Tibia1098WithReviewsStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-with-reviews-status" />;
}
