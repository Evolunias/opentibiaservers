import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-with-reviews-server-europe');
}

export default function MadnessaliveWithReviewsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-with-reviews-server-europe" />;
}
