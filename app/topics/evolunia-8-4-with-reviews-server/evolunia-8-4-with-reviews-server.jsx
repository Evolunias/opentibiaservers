import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-8-4-with-reviews-server');
}

export default function Evolunia84WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-8-4-with-reviews-server" />;
}
