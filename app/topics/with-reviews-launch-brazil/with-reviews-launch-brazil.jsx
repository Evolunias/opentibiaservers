import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-launch-brazil');
}

export default function WithReviewsLaunchBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-launch-brazil" />;
}
