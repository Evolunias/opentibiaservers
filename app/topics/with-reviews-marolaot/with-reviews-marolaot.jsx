import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-marolaot');
}

export default function WithReviewsMarolaotKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-marolaot" />;
}
