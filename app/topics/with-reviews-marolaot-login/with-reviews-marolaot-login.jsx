import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-marolaot-login');
}

export default function WithReviewsMarolaotLoginKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-marolaot-login" />;
}
