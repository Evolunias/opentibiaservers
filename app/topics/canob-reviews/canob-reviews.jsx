import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-reviews');
}

export default function CanobReviewsKeywordPage() {
  return <StaticKeywordPage slug="canob-reviews" />;
}
