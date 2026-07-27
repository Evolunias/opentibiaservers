import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-7-72-with-reviews-server');
}

export default function Cyntara772WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-7-72-with-reviews-server" />;
}
