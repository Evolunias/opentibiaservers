import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-with-reviews-server-germany');
}

export default function EvoleraWithReviewsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="evolera-with-reviews-server-germany" />;
}
