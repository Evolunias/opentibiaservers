import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-with-reviews-server-usa');
}

export default function EvoleraWithReviewsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="evolera-with-reviews-server-usa" />;
}
