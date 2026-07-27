import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-13-with-reviews-server');
}

export default function Madnessalive13WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-13-with-reviews-server" />;
}
