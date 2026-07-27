import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-with-reviews-server-poland');
}

export default function EvoleraWithReviewsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="evolera-with-reviews-server-poland" />;
}
