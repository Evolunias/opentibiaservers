import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-with-reviews-review');
}

export default function Tibia14WithReviewsReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-with-reviews-review" />;
}
