import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-with-reviews-server-argentina');
}

export default function EvoleraWithReviewsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="evolera-with-reviews-server-argentina" />;
}
