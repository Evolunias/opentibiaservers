import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-with-reviews-server-sweden');
}

export default function RubinotWithReviewsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="rubinot-with-reviews-server-sweden" />;
}
