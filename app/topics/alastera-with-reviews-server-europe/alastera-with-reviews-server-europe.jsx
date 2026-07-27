import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-with-reviews-server-europe');
}

export default function AlasteraWithReviewsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="alastera-with-reviews-server-europe" />;
}
