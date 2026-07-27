import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-with-reviews-review');
}

export default function Tibia84WithReviewsReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-with-reviews-review" />;
}
