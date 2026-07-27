import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-evo-servers-brazil');
}

export default function EmpirebrEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="empirebr-evo-servers-brazil" />;
}
