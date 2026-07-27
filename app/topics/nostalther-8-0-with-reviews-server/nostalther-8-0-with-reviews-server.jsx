import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-8-0-with-reviews-server');
}

export default function Nostalther80WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-8-0-with-reviews-server" />;
}
