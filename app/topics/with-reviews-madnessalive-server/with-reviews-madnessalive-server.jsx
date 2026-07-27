import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-madnessalive-server');
}

export default function WithReviewsMadnessaliveServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-madnessalive-server" />;
}
