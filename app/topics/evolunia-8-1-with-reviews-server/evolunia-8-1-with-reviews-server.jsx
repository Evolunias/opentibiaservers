import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-8-1-with-reviews-server');
}

export default function Evolunia81WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-8-1-with-reviews-server" />;
}
