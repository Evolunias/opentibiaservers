import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-15-with-reviews-server');
}

export default function Sabrehaven15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-15-with-reviews-server" />;
}
