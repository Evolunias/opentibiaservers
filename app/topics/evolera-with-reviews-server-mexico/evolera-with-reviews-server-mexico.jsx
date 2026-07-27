import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-with-reviews-server-mexico');
}

export default function EvoleraWithReviewsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="evolera-with-reviews-server-mexico" />;
}
