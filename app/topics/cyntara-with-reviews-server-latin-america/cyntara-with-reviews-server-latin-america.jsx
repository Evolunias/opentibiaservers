import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-with-reviews-server-latin-america');
}

export default function CyntaraWithReviewsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-with-reviews-server-latin-america" />;
}
