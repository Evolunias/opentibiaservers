import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-reviews-review');
}

export default function Tibia11WithReviewsReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-reviews-review" />;
}
