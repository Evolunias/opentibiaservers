import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-no-reset-players-online');
}

export default function Tibia14NoResetPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-no-reset-players-online" />;
}
