import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-11-with-reviews-server');
}

export default function Nostalther11WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-11-with-reviews-server" />;
}
