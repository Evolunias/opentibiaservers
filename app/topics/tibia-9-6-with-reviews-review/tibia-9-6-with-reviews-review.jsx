import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-with-reviews-review');
}

export default function Tibia96WithReviewsReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-with-reviews-review" />;
}
