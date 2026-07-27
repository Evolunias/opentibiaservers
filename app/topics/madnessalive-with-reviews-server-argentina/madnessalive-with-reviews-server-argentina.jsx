import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-with-reviews-server-argentina');
}

export default function MadnessaliveWithReviewsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-with-reviews-server-argentina" />;
}
