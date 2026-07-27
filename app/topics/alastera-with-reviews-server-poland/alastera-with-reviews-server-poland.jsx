import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-with-reviews-server-poland');
}

export default function AlasteraWithReviewsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="alastera-with-reviews-server-poland" />;
}
