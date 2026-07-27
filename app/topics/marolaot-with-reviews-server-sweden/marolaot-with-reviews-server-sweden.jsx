import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-with-reviews-server-sweden');
}

export default function MarolaotWithReviewsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="marolaot-with-reviews-server-sweden" />;
}
