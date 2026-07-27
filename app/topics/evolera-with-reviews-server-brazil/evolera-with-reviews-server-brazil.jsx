import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-with-reviews-server-brazil');
}

export default function EvoleraWithReviewsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="evolera-with-reviews-server-brazil" />;
}
