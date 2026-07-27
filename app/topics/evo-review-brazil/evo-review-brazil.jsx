import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-review-brazil');
}

export default function EvoReviewBrazilKeywordPage() {
  return <StaticKeywordPage slug="evo-review-brazil" />;
}
