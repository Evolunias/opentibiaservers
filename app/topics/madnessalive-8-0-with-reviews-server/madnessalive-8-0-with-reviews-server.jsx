import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-8-0-with-reviews-server');
}

export default function Madnessalive80WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-8-0-with-reviews-server" />;
}
