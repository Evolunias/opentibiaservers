import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-with-reviews-review');
}

export default function Tibia80WithReviewsReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-with-reviews-review" />;
}
