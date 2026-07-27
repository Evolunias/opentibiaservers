import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-11-with-reviews-server');
}

export default function Evolunia11WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-11-with-reviews-server" />;
}
