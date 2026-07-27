import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-with-reviews-review');
}

export default function Tibia81WithReviewsReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-with-reviews-review" />;
}
