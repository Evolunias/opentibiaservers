import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-with-reviews-server-germany');
}

export default function MadnessaliveWithReviewsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-with-reviews-server-germany" />;
}
