import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-14-with-reviews-server');
}

export default function Sabrehaven14WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-14-with-reviews-server" />;
}
