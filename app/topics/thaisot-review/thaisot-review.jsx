import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-review');
}

export default function ThaisotReviewKeywordPage() {
  return <StaticKeywordPage slug="thaisot-review" />;
}
