import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-with-reviews-server-europe');
}

export default function EvoleraWithReviewsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="evolera-with-reviews-server-europe" />;
}
