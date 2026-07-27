import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-evo-server-usa');
}

export default function EmpirebrEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-evo-server-usa" />;
}
