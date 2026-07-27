import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-evo-server-latin-america');
}

export default function EmpirebrEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-evo-server-latin-america" />;
}
