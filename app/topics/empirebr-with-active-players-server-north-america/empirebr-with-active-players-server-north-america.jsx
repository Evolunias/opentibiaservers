import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-with-active-players-server-north-america');
}

export default function EmpirebrWithActivePlayersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-with-active-players-server-north-america" />;
}
