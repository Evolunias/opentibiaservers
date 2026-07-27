import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-low-exp-players-online');
}

export default function Tibia13LowExpPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-low-exp-players-online" />;
}
