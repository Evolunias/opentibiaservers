import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-high-exp-players-online');
}

export default function Tibia84HighExpPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-high-exp-players-online" />;
}
