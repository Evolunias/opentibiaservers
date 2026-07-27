import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-8-4-with-reviews-server');
}

export default function Saintsot84WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-8-4-with-reviews-server" />;
}
