import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-reviews');
}

export default function RubinotReviewsKeywordPage() {
  return <StaticKeywordPage slug="rubinot-reviews" />;
}
