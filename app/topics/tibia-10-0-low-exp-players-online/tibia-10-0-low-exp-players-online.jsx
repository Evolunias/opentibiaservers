import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-low-exp-players-online');
}

export default function Tibia100LowExpPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-low-exp-players-online" />;
}
