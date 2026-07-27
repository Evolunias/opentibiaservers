import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-with-reviews-server-mexico');
}

export default function RubinotWithReviewsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="rubinot-with-reviews-server-mexico" />;
}
