import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-8-4-with-reviews-server');
}

export default function Madnessalive84WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-8-4-with-reviews-server" />;
}
