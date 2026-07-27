import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-with-reviews-server-sweden');
}

export default function MiracleWithReviewsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="miracle-with-reviews-server-sweden" />;
}
