import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-blazera-tibia');
}

export default function WithReviewsBlazeraTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-blazera-tibia" />;
}
