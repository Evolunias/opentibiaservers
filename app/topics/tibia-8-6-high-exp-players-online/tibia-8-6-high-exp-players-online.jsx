import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-high-exp-players-online');
}

export default function Tibia86HighExpPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-high-exp-players-online" />;
}
