import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-launch-europe');
}

export default function WithReviewsLaunchEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-launch-europe" />;
}
