import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-15-with-reviews-server');
}

export default function Saintsot15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-15-with-reviews-server" />;
}
