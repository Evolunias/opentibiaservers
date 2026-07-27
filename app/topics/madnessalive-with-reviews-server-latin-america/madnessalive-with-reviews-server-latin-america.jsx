import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-with-reviews-server-latin-america');
}

export default function MadnessaliveWithReviewsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-with-reviews-server-latin-america" />;
}
