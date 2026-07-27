import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-with-reviews-review');
}

export default function Tibia12WithReviewsReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-with-reviews-review" />;
}
