import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-15-with-reviews-server');
}

export default function Madnessalive15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-15-with-reviews-server" />;
}
