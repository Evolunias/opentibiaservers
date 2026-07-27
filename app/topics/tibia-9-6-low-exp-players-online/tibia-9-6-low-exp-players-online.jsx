import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-low-exp-players-online');
}

export default function Tibia96LowExpPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-low-exp-players-online" />;
}
