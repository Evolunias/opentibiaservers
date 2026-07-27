import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-madnessalive-client');
}

export default function WithReviewsMadnessaliveClientKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-madnessalive-client" />;
}
