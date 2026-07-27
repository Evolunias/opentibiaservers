import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-reviews');
}

export default function NilotReviewsKeywordPage() {
  return <StaticKeywordPage slug="nilot-reviews" />;
}
