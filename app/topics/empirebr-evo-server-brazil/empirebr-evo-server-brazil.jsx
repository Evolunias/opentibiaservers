import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-evo-server-brazil');
}

export default function EmpirebrEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="empirebr-evo-server-brazil" />;
}
