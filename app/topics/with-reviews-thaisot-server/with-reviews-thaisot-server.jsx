import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-thaisot-server');
}

export default function WithReviewsThaisotServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-thaisot-server" />;
}
