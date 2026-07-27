import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-7-4-with-reviews-server');
}

export default function Madnessalive74WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-7-4-with-reviews-server" />;
}
