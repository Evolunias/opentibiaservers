import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-14-with-reviews-server');
}

export default function Evolunia14WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-14-with-reviews-server" />;
}
