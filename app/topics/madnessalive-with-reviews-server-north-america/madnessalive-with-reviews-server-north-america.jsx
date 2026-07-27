import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-with-reviews-server-north-america');
}

export default function MadnessaliveWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-with-reviews-server-north-america" />;
}
