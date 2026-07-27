import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-eldera-tibia');
}

export default function WithReviewsElderaTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-eldera-tibia" />;
}
