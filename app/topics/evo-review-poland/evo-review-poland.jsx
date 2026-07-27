import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-review-poland');
}

export default function EvoReviewPolandKeywordPage() {
  return <StaticKeywordPage slug="evo-review-poland" />;
}
