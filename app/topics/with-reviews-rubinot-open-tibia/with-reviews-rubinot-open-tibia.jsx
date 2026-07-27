import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-rubinot-open-tibia');
}

export default function WithReviewsRubinotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-rubinot-open-tibia" />;
}
