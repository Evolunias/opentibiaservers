import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-review-south-america');
}

export default function HighExpReviewSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-review-south-america" />;
}
