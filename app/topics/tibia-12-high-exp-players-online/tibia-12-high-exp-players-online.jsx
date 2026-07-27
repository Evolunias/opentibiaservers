import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-high-exp-players-online');
}

export default function Tibia12HighExpPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-high-exp-players-online" />;
}
