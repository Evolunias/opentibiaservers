import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-market');
}

export default function EmpirebrMarketKeywordPage() {
  return <StaticKeywordPage slug="empirebr-market" />;
}
