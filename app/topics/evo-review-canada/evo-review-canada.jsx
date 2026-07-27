import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-review-canada');
}

export default function EvoReviewCanadaKeywordPage() {
  return <StaticKeywordPage slug="evo-review-canada" />;
}
