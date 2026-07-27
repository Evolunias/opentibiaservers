import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-low-exp-players-online');
}

export default function Tibia11LowExpPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-low-exp-players-online" />;
}
