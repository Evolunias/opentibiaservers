import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-with-active-players-server-germany');
}

export default function EmpirebrWithActivePlayersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="empirebr-with-active-players-server-germany" />;
}
