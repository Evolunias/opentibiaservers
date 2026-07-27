import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-reviews');
}

export default function EvoleraReviewsKeywordPage() {
  return <StaticKeywordPage slug="evolera-reviews" />;
}
