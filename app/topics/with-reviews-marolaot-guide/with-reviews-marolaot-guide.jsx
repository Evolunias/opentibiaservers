import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-marolaot-guide');
}

export default function WithReviewsMarolaotGuideKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-marolaot-guide" />;
}
