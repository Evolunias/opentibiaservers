import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-high-exp-players-online');
}

export default function Tibia100HighExpPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-high-exp-players-online" />;
}
