import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-with-reviews-server-north-america');
}

export default function CyntaraWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-with-reviews-server-north-america" />;
}
