import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-review');
}

export default function MarolaotReviewKeywordPage() {
  return <StaticKeywordPage slug="marolaot-review" />;
}
