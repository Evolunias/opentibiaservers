import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-trainers-players-online');
}

export default function Tibia11WithTrainersPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-trainers-players-online" />;
}
