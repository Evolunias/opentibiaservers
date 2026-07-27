import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-evo-server-argentina');
}

export default function EmpirebrEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-evo-server-argentina" />;
}
