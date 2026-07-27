import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-with-reviews-server-north-america');
}

export default function LumineraWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="luminera-with-reviews-server-north-america" />;
}
