import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-ruthless-chaos-website');
}

export default function WithReviewsRuthlessChaosWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-ruthless-chaos-website" />;
}
