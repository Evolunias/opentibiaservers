import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-14-with-reviews-server');
}

export default function Saintsot14WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-14-with-reviews-server" />;
}
