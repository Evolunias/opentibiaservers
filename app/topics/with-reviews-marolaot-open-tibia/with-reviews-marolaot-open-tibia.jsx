import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-marolaot-open-tibia');
}

export default function WithReviewsMarolaotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-marolaot-open-tibia" />;
}
