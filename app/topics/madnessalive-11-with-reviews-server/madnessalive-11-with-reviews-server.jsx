import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-11-with-reviews-server');
}

export default function Madnessalive11WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-11-with-reviews-server" />;
}
