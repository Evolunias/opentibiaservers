import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-high-exp-players-online');
}

export default function Tibia80HighExpPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-high-exp-players-online" />;
}
