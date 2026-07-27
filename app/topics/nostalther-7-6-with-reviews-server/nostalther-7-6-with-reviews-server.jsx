import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-7-6-with-reviews-server');
}

export default function Nostalther76WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-7-6-with-reviews-server" />;
}
