import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-9-6-with-reviews-server');
}

export default function Evolunia96WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-9-6-with-reviews-server" />;
}
