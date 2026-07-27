import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-with-active-players-server-europe');
}

export default function EmpirebrWithActivePlayersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="empirebr-with-active-players-server-europe" />;
}
