import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-reviews');
}

export default function ThaisotReviewsKeywordPage() {
  return <StaticKeywordPage slug="thaisot-reviews" />;
}
