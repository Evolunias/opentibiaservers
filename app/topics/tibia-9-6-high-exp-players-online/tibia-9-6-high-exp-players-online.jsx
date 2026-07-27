import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-high-exp-players-online');
}

export default function Tibia96HighExpPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-high-exp-players-online" />;
}
