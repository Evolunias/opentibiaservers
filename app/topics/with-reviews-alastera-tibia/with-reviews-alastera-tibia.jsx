import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-alastera-tibia');
}

export default function WithReviewsAlasteraTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-alastera-tibia" />;
}
