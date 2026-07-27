import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-marolaot-ots');
}

export default function WithReviewsMarolaotOtsKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-marolaot-ots" />;
}
