import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-with-reviews-server-uk');
}

export default function EvoleraWithReviewsServerUkKeywordPage() {
  return <StaticKeywordPage slug="evolera-with-reviews-server-uk" />;
}
