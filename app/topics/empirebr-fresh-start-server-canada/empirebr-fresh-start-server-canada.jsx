import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-fresh-start-server-canada');
}

export default function EmpirebrFreshStartServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-fresh-start-server-canada" />;
}
