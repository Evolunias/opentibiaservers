import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-reviews');
}

export default function CarlinotReviewsKeywordPage() {
  return <StaticKeywordPage slug="carlinot-reviews" />;
}
