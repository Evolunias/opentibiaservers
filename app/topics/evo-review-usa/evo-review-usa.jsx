import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-review-usa');
}

export default function EvoReviewUsaKeywordPage() {
  return <StaticKeywordPage slug="evo-review-usa" />;
}
