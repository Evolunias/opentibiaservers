import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-with-reviews-server-north-america');
}

export default function EvoleraWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolera-with-reviews-server-north-america" />;
}
