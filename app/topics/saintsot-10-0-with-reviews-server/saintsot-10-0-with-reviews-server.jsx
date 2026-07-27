import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-10-0-with-reviews-server');
}

export default function Saintsot100WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-10-0-with-reviews-server" />;
}
