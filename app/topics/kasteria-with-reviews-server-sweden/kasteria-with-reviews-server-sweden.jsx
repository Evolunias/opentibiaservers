import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-reviews-server-sweden');
}

export default function KasteriaWithReviewsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-reviews-server-sweden" />;
}
