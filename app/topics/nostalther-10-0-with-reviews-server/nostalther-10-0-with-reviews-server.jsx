import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-10-0-with-reviews-server');
}

export default function Nostalther100WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-10-0-with-reviews-server" />;
}
