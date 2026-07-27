import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-with-reviews-server-mexico');
}

export default function AlasteraWithReviewsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="alastera-with-reviews-server-mexico" />;
}
