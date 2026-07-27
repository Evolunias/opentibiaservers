import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-canob-open-tibia');
}

export default function WithReviewsCanobOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-canob-open-tibia" />;
}
