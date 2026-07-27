import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-with-reviews-server-canada');
}

export default function AlasteraWithReviewsServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="alastera-with-reviews-server-canada" />;
}
