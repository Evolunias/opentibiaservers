import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-launch-latin-america');
}

export default function WithReviewsLaunchLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-launch-latin-america" />;
}
