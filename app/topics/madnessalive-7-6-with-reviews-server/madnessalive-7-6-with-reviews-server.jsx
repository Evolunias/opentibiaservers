import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-7-6-with-reviews-server');
}

export default function Madnessalive76WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-7-6-with-reviews-server" />;
}
