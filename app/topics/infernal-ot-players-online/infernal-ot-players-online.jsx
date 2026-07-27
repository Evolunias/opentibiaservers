import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-players-online');
}

export default function InfernalOtPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-players-online" />;
}
