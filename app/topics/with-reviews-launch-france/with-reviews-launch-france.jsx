import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-launch-france');
}

export default function WithReviewsLaunchFranceKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-launch-france" />;
}
