import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-13-with-reviews-server');
}

export default function Nostalther13WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-13-with-reviews-server" />;
}
