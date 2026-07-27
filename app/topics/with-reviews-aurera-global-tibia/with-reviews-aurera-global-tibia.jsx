import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-aurera-global-tibia');
}

export default function WithReviewsAureraGlobalTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-aurera-global-tibia" />;
}
