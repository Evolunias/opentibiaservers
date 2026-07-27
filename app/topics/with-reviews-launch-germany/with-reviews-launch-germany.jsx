import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-launch-germany');
}

export default function WithReviewsLaunchGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-launch-germany" />;
}
