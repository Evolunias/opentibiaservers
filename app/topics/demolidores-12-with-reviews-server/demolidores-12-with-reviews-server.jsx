import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-12-with-reviews-server');
}

export default function Demolidores12WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-12-with-reviews-server" />;
}
