import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-7-72-with-reviews-server');
}

export default function Evolunia772WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-7-72-with-reviews-server" />;
}
