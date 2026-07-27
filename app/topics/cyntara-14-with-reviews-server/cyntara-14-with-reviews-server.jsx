import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-14-with-reviews-server');
}

export default function Cyntara14WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-14-with-reviews-server" />;
}
