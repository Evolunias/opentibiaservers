import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-marolaot-client');
}

export default function WithReviewsMarolaotClientKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-marolaot-client" />;
}
