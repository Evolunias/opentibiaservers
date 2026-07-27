import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-with-reviews-server-latin-america');
}

export default function InfernalOtWithReviewsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-with-reviews-server-latin-america" />;
}
