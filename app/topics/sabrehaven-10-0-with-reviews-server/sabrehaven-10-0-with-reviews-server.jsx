import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-10-0-with-reviews-server');
}

export default function Sabrehaven100WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-10-0-with-reviews-server" />;
}
