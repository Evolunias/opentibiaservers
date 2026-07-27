import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-ameria-tibia');
}

export default function WithReviewsAmeriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-ameria-tibia" />;
}
