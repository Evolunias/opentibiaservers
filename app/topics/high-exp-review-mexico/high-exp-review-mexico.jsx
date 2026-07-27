import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-review-mexico');
}

export default function HighExpReviewMexicoKeywordPage() {
  return <StaticKeywordPage slug="high-exp-review-mexico" />;
}
