import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-review-mexico');
}

export default function EvoReviewMexicoKeywordPage() {
  return <StaticKeywordPage slug="evo-review-mexico" />;
}
