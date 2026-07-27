import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-with-reviews-server-uk');
}

export default function AlasteraWithReviewsServerUkKeywordPage() {
  return <StaticKeywordPage slug="alastera-with-reviews-server-uk" />;
}
