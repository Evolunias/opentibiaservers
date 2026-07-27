import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-with-reviews-server-argentina');
}

export default function AlasteraWithReviewsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="alastera-with-reviews-server-argentina" />;
}
