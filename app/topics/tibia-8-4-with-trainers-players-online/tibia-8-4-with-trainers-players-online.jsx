import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-with-trainers-players-online');
}

export default function Tibia84WithTrainersPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-with-trainers-players-online" />;
}
