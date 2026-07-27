import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-with-reviews-server-sweden');
}

export default function AlasteraWithReviewsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="alastera-with-reviews-server-sweden" />;
}
