import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-7-1-with-reviews-server');
}

export default function Nostalther71WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-7-1-with-reviews-server" />;
}
