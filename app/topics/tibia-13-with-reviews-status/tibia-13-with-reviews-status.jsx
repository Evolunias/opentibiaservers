import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-with-reviews-status');
}

export default function Tibia13WithReviewsStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-with-reviews-status" />;
}
