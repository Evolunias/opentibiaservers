import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-baiak-ilusion-client');
}

export default function WithReviewsBaiakIlusionClientKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-baiak-ilusion-client" />;
}
