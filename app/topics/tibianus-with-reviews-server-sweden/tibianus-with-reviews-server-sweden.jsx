import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-reviews-server-sweden');
}

export default function TibianusWithReviewsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-reviews-server-sweden" />;
}
