import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-evo-server-mexico');
}

export default function EmpirebrEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="empirebr-evo-server-mexico" />;
}
