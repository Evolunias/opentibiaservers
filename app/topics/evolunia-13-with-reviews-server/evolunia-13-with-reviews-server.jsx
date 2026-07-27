import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-13-with-reviews-server');
}

export default function Evolunia13WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-13-with-reviews-server" />;
}
