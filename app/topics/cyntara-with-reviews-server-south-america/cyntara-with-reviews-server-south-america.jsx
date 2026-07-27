import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-with-reviews-server-south-america');
}

export default function CyntaraWithReviewsServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-with-reviews-server-south-america" />;
}
