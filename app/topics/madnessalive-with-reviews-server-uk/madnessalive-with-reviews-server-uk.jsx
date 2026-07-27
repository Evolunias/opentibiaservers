import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-with-reviews-server-uk');
}

export default function MadnessaliveWithReviewsServerUkKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-with-reviews-server-uk" />;
}
