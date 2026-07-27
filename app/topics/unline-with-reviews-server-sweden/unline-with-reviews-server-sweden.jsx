import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-with-reviews-server-sweden');
}

export default function UnlineWithReviewsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="unline-with-reviews-server-sweden" />;
}
