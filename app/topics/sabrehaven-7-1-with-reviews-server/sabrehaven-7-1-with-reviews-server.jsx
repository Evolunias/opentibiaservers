import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-7-1-with-reviews-server');
}

export default function Sabrehaven71WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-7-1-with-reviews-server" />;
}
