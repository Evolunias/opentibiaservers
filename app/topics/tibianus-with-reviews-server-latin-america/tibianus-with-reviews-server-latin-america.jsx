import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-reviews-server-latin-america');
}

export default function TibianusWithReviewsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-reviews-server-latin-america" />;
}
