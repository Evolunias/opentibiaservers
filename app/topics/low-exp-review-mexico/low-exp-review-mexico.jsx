import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-review-mexico');
}

export default function LowExpReviewMexicoKeywordPage() {
  return <StaticKeywordPage slug="low-exp-review-mexico" />;
}
