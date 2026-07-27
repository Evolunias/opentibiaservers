import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-8-0-with-reviews-server');
}

export default function Saintsot80WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-8-0-with-reviews-server" />;
}
