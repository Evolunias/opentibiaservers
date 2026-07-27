import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-rubinot-tibia');
}

export default function WithReviewsRubinotTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-rubinot-tibia" />;
}
