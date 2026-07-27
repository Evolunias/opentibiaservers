import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-high-exp-players-online');
}

export default function Tibia854HighExpPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-high-exp-players-online" />;
}
