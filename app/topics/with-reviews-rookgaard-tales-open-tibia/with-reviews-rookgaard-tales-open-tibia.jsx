import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-rookgaard-tales-open-tibia');
}

export default function WithReviewsRookgaardTalesOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-rookgaard-tales-open-tibia" />;
}
