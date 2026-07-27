import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-high-exp-players-online');
}

export default function Tibia11HighExpPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-high-exp-players-online" />;
}
