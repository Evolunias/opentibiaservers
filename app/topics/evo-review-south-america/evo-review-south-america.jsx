import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-review-south-america');
}

export default function EvoReviewSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evo-review-south-america" />;
}
