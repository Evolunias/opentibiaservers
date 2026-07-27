import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-low-exp-players-online');
}

export default function Tibia80LowExpPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-low-exp-players-online" />;
}
