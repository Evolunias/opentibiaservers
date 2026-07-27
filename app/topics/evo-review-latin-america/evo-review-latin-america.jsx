import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-review-latin-america');
}

export default function EvoReviewLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evo-review-latin-america" />;
}
