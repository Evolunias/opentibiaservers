import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-with-reviews-server-south-america');
}

export default function AlasteraWithReviewsServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="alastera-with-reviews-server-south-america" />;
}
