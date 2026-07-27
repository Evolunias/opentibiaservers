import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-marolaot-rules');
}

export default function WithReviewsMarolaotRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-marolaot-rules" />;
}
