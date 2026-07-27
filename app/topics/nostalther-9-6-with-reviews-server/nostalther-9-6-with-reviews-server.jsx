import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-9-6-with-reviews-server');
}

export default function Nostalther96WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-9-6-with-reviews-server" />;
}
