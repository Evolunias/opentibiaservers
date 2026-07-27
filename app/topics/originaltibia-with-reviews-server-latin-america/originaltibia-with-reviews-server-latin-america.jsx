import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-with-reviews-server-latin-america');
}

export default function OriginaltibiaWithReviewsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-with-reviews-server-latin-america" />;
}
