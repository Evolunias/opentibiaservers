import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-with-reviews-review');
}

export default function Tibia772WithReviewsReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-with-reviews-review" />;
}
