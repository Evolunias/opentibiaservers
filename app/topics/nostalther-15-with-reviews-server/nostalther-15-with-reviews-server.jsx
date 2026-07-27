import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-15-with-reviews-server');
}

export default function Nostalther15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-15-with-reviews-server" />;
}
