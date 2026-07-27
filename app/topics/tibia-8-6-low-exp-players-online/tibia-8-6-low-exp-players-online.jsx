import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-low-exp-players-online');
}

export default function Tibia86LowExpPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-low-exp-players-online" />;
}
