import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-evo-server-canada');
}

export default function EmpirebrEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-evo-server-canada" />;
}
