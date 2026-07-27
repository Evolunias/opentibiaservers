import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-with-reviews-review');
}

export default function Tibia76WithReviewsReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-with-reviews-review" />;
}
