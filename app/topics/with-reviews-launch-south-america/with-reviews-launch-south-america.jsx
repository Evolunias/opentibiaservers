import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-launch-south-america');
}

export default function WithReviewsLaunchSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-launch-south-america" />;
}
