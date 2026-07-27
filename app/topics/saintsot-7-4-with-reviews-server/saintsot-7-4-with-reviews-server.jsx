import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-7-4-with-reviews-server');
}

export default function Saintsot74WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-7-4-with-reviews-server" />;
}
