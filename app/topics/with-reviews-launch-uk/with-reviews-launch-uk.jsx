import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-launch-uk');
}

export default function WithReviewsLaunchUkKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-launch-uk" />;
}
