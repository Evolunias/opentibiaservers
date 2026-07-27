import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-launch-mexico');
}

export default function WithReviewsLaunchMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-launch-mexico" />;
}
