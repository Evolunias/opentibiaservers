import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-high-exp-players-online');
}

export default function Tibia71HighExpPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-high-exp-players-online" />;
}
