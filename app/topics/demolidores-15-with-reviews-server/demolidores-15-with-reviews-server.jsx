import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-15-with-reviews-server');
}

export default function Demolidores15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-15-with-reviews-server" />;
}
