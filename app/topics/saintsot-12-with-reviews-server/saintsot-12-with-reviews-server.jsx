import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-12-with-reviews-server');
}

export default function Saintsot12WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-12-with-reviews-server" />;
}
