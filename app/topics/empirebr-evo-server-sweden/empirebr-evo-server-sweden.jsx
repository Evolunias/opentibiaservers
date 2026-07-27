import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-evo-server-sweden');
}

export default function EmpirebrEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="empirebr-evo-server-sweden" />;
}
