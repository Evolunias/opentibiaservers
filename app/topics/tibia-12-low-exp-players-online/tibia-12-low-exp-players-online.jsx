import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-low-exp-players-online');
}

export default function Tibia12LowExpPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-low-exp-players-online" />;
}
