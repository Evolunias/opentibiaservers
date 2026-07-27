import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-evo-server-south-america');
}

export default function EmpirebrEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-evo-server-south-america" />;
}
