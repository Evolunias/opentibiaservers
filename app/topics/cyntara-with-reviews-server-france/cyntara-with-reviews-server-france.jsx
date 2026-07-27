import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-with-reviews-server-france');
}

export default function CyntaraWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="cyntara-with-reviews-server-france" />;
}
