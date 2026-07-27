import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-with-reviews-server-sweden');
}

export default function EvoleraWithReviewsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="evolera-with-reviews-server-sweden" />;
}
