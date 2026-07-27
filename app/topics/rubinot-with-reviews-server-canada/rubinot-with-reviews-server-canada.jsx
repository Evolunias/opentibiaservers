import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-with-reviews-server-canada');
}

export default function RubinotWithReviewsServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-with-reviews-server-canada" />;
}
