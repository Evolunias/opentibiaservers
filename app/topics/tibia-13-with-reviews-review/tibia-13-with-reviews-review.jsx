import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-with-reviews-review');
}

export default function Tibia13WithReviewsReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-with-reviews-review" />;
}
