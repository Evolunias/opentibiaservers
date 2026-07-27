import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-players-online');
}

export default function OxygenotPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-players-online" />;
}
