import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-with-reviews-server-france');
}

export default function EmpirebrWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="empirebr-with-reviews-server-france" />;
}
