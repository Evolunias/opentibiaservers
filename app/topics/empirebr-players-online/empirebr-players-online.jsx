import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-players-online');
}

export default function EmpirebrPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="empirebr-players-online" />;
}
