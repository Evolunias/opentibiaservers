import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-with-reviews-server-mexico');
}

export default function MadnessaliveWithReviewsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-with-reviews-server-mexico" />;
}
