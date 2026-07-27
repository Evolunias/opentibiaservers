import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-oxygenot-tibia');
}

export default function WithReviewsOxygenotTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-oxygenot-tibia" />;
}
