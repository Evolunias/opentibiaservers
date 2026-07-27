import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-12-with-reviews-server');
}

export default function Evolunia12WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-12-with-reviews-server" />;
}
