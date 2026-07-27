import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-with-reviews-server-latin-america');
}

export default function OxygenotWithReviewsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-with-reviews-server-latin-america" />;
}
