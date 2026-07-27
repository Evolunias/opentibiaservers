import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-with-active-players-server-sweden');
}

export default function EmpirebrWithActivePlayersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="empirebr-with-active-players-server-sweden" />;
}
