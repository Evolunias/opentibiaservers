import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-12-with-reviews-server');
}

export default function Nostalther12WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-12-with-reviews-server" />;
}
