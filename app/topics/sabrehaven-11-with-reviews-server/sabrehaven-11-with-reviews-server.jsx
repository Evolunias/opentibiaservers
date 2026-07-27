import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-11-with-reviews-server');
}

export default function Sabrehaven11WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-11-with-reviews-server" />;
}
