import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-ranger-s-arcani-server');
}

export default function WithReviewsRangerSArcaniServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-ranger-s-arcani-server" />;
}
