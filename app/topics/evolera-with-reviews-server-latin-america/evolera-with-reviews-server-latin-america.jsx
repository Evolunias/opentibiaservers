import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-with-reviews-server-latin-america');
}

export default function EvoleraWithReviewsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolera-with-reviews-server-latin-america" />;
}
