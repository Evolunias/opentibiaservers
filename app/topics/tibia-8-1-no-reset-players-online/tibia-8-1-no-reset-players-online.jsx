import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-no-reset-players-online');
}

export default function Tibia81NoResetPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-no-reset-players-online" />;
}
