import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-canob-tibia');
}

export default function WithReviewsCanobTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-canob-tibia" />;
}
