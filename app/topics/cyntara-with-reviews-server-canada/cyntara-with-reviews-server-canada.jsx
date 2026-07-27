import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-with-reviews-server-canada');
}

export default function CyntaraWithReviewsServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-with-reviews-server-canada" />;
}
