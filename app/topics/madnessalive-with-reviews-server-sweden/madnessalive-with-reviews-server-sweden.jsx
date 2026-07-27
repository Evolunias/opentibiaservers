import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-with-reviews-server-sweden');
}

export default function MadnessaliveWithReviewsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-with-reviews-server-sweden" />;
}
