import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-low-exp-players-online');
}

export default function Tibia14LowExpPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-low-exp-players-online" />;
}
