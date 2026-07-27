import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-reviews-server-sweden');
}

export default function TibiameWithReviewsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-reviews-server-sweden" />;
}
