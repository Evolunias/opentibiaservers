import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-marolaot-tibia');
}

export default function WithReviewsMarolaotTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-marolaot-tibia" />;
}
