import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-with-reviews-server-mexico');
}

export default function EmpirebrWithReviewsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="empirebr-with-reviews-server-mexico" />;
}
