import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-11-with-reviews-server');
}

export default function Saintsot11WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-11-with-reviews-server" />;
}
