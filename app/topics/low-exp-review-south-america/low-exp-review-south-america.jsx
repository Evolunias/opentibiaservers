import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-review-south-america');
}

export default function LowExpReviewSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-review-south-america" />;
}
