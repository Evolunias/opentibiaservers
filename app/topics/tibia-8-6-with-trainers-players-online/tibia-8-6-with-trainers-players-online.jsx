import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-with-trainers-players-online');
}

export default function Tibia86WithTrainersPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-with-trainers-players-online" />;
}
