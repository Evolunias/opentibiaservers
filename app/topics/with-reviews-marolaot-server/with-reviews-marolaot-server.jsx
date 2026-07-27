import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-marolaot-server');
}

export default function WithReviewsMarolaotServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-marolaot-server" />;
}
