import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-review-germany');
}

export default function EvoReviewGermanyKeywordPage() {
  return <StaticKeywordPage slug="evo-review-germany" />;
}
