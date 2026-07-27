import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-marolaot-official');
}

export default function WithReviewsMarolaotOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-marolaot-official" />;
}
