import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-7-1-with-reviews-server');
}

export default function Saintsot71WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-7-1-with-reviews-server" />;
}
