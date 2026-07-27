import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-review-sweden');
}

export default function EvoReviewSwedenKeywordPage() {
  return <StaticKeywordPage slug="evo-review-sweden" />;
}
