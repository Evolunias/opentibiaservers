import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-launch-canada');
}

export default function WithReviewsLaunchCanadaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-launch-canada" />;
}
