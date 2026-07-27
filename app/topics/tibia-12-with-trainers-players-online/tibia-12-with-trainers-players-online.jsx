import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-with-trainers-players-online');
}

export default function Tibia12WithTrainersPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-with-trainers-players-online" />;
}
