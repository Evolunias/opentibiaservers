import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-8-6-with-reviews-server');
}

export default function Cyntara86WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-8-6-with-reviews-server" />;
}
