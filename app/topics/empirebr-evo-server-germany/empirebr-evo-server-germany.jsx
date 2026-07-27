import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-evo-server-germany');
}

export default function EmpirebrEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="empirebr-evo-server-germany" />;
}
