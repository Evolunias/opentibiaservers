import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-medivia-tibia');
}

export default function WithReviewsMediviaTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-medivia-tibia" />;
}
