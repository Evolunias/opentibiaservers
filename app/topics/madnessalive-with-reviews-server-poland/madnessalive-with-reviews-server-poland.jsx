import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-with-reviews-server-poland');
}

export default function MadnessaliveWithReviewsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-with-reviews-server-poland" />;
}
