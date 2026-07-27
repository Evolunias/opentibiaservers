import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-carlinot-tibia');
}

export default function WithReviewsCarlinotTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-carlinot-tibia" />;
}
