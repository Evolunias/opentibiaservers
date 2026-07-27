import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-7-4-with-reviews-server');
}

export default function Sabrehaven74WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-7-4-with-reviews-server" />;
}
