import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-classicus-tibia');
}

export default function WithReviewsClassicusTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-classicus-tibia" />;
}
