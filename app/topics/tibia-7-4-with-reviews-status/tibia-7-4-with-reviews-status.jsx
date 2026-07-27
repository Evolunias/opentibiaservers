import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-with-reviews-status');
}

export default function Tibia74WithReviewsStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-with-reviews-status" />;
}
