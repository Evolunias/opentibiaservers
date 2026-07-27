import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-oxygenot-open-tibia');
}

export default function WithReviewsOxygenotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-oxygenot-open-tibia" />;
}
