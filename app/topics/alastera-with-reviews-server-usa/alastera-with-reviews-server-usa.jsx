import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-with-reviews-server-usa');
}

export default function AlasteraWithReviewsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="alastera-with-reviews-server-usa" />;
}
