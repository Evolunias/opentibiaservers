import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-review');
}

export default function NilotReviewKeywordPage() {
  return <StaticKeywordPage slug="nilot-review" />;
}
