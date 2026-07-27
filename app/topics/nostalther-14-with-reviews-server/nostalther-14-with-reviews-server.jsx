import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-14-with-reviews-server');
}

export default function Nostalther14WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-14-with-reviews-server" />;
}
