import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-high-exp-players-online');
}

export default function Tibia74HighExpPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-high-exp-players-online" />;
}
