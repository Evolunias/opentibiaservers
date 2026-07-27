import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-9-6-with-reviews-server');
}

export default function Saintsot96WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-9-6-with-reviews-server" />;
}
