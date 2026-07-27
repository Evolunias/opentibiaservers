import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-8-6-with-reviews-server');
}

export default function Madnessalive86WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-8-6-with-reviews-server" />;
}
