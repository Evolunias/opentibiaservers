import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-with-trainers-players-online');
}

export default function Tibia71WithTrainersPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-with-trainers-players-online" />;
}
