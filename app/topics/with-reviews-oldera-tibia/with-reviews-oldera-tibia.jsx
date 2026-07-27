import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-oldera-tibia');
}

export default function WithReviewsOlderaTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-oldera-tibia" />;
}
