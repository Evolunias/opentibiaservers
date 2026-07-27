import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-launch-argentina');
}

export default function WithReviewsLaunchArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-launch-argentina" />;
}
