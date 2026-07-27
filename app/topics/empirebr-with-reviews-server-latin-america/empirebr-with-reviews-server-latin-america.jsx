import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-with-reviews-server-latin-america');
}

export default function EmpirebrWithReviewsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-with-reviews-server-latin-america" />;
}
