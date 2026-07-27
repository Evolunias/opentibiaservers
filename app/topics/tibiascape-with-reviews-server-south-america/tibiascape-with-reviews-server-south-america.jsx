import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-reviews-server-south-america');
}

export default function TibiascapeWithReviewsServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-reviews-server-south-america" />;
}
