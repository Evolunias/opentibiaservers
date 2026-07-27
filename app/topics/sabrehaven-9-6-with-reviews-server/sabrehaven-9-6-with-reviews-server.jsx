import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-9-6-with-reviews-server');
}

export default function Sabrehaven96WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-9-6-with-reviews-server" />;
}
