import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-high-exp-players-online');
}

export default function Tibia15HighExpPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-high-exp-players-online" />;
}
