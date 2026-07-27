import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-launch-usa');
}

export default function WithReviewsLaunchUsaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-launch-usa" />;
}
