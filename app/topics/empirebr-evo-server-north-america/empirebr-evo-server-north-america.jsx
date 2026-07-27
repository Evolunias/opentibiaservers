import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-evo-server-north-america');
}

export default function EmpirebrEvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-evo-server-north-america" />;
}
