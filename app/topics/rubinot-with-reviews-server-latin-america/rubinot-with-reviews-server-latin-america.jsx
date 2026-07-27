import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-with-reviews-server-latin-america');
}

export default function RubinotWithReviewsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-with-reviews-server-latin-america" />;
}
