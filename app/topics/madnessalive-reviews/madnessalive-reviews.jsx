import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-reviews');
}

export default function MadnessaliveReviewsKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-reviews" />;
}
