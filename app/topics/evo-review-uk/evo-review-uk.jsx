import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-review-uk');
}

export default function EvoReviewUkKeywordPage() {
  return <StaticKeywordPage slug="evo-review-uk" />;
}
