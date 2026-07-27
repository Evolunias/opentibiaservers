import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-high-exp-players-online');
}

export default function Tibia13HighExpPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-high-exp-players-online" />;
}
