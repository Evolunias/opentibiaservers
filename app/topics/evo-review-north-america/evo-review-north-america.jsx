import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-review-north-america');
}

export default function EvoReviewNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evo-review-north-america" />;
}
