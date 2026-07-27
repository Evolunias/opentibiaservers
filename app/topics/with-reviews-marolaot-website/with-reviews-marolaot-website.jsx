import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-marolaot-website');
}

export default function WithReviewsMarolaotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-marolaot-website" />;
}
