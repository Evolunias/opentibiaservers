import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-8-1-with-reviews-server');
}

export default function Nostalther81WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-8-1-with-reviews-server" />;
}
