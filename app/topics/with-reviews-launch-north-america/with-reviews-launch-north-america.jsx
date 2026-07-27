import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-launch-north-america');
}

export default function WithReviewsLaunchNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-launch-north-america" />;
}
