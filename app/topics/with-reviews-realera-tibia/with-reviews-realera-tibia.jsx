import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-realera-tibia');
}

export default function WithReviewsRealeraTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-realera-tibia" />;
}
