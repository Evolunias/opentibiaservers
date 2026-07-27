import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-with-reviews-server-south-america');
}

export default function LumineraWithReviewsServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="luminera-with-reviews-server-south-america" />;
}
