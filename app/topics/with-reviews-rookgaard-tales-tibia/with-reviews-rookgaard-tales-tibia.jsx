import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-rookgaard-tales-tibia');
}

export default function WithReviewsRookgaardTalesTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-rookgaard-tales-tibia" />;
}
