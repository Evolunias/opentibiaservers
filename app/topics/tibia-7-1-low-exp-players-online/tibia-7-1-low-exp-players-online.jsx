import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-low-exp-players-online');
}

export default function Tibia71LowExpPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-low-exp-players-online" />;
}
