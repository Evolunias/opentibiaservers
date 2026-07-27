import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-with-reviews-server-north-america');
}

export default function RubinotWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-with-reviews-server-north-america" />;
}
