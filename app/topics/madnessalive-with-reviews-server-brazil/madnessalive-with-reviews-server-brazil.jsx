import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-with-reviews-server-brazil');
}

export default function MadnessaliveWithReviewsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-with-reviews-server-brazil" />;
}
