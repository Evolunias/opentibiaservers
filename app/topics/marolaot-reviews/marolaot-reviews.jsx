import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-reviews');
}

export default function MarolaotReviewsKeywordPage() {
  return <StaticKeywordPage slug="marolaot-reviews" />;
}
