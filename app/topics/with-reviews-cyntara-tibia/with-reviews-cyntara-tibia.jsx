import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-cyntara-tibia');
}

export default function WithReviewsCyntaraTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-cyntara-tibia" />;
}
