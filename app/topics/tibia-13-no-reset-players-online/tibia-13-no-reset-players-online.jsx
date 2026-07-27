import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-no-reset-players-online');
}

export default function Tibia13NoResetPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-no-reset-players-online" />;
}
