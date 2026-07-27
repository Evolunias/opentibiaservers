import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-with-reviews-server-mexico');
}

export default function CyntaraWithReviewsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="cyntara-with-reviews-server-mexico" />;
}
