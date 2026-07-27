import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-no-reset-players-online');
}

export default function Tibia854NoResetPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-no-reset-players-online" />;
}
