import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-reviews-server-sweden');
}

export default function NilotWithReviewsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-reviews-server-sweden" />;
}
