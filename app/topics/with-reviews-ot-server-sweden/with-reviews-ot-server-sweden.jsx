import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-ot-server-sweden');
}

export default function WithReviewsOtServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-ot-server-sweden" />;
}
