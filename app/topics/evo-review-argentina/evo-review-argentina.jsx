import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-review-argentina');
}

export default function EvoReviewArgentinaKeywordPage() {
  return <StaticKeywordPage slug="evo-review-argentina" />;
}
