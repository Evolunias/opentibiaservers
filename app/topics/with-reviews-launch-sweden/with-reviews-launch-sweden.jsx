import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-launch-sweden');
}

export default function WithReviewsLaunchSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-launch-sweden" />;
}
