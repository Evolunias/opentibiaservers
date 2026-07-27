import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-with-reviews-status');
}

export default function Tibia854WithReviewsStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-with-reviews-status" />;
}
