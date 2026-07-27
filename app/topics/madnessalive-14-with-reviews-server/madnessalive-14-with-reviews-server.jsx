import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-14-with-reviews-server');
}

export default function Madnessalive14WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-14-with-reviews-server" />;
}
