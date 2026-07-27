import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-carlinot-open-tibia');
}

export default function WithReviewsCarlinotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-carlinot-open-tibia" />;
}
