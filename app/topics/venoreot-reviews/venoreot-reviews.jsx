import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-reviews');
}

export default function VenoreotReviewsKeywordPage() {
  return <StaticKeywordPage slug="venoreot-reviews" />;
}
