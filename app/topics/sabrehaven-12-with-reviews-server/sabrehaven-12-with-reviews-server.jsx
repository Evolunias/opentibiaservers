import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-12-with-reviews-server');
}

export default function Sabrehaven12WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-12-with-reviews-server" />;
}
