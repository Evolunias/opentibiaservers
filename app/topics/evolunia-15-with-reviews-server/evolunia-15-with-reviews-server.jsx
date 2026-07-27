import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-15-with-reviews-server');
}

export default function Evolunia15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-15-with-reviews-server" />;
}
