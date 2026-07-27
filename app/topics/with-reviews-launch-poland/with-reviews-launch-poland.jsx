import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-launch-poland');
}

export default function WithReviewsLaunchPolandKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-launch-poland" />;
}
