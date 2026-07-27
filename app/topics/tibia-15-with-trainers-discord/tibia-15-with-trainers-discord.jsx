import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-with-trainers-discord');
}

export default function Tibia15WithTrainersDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-with-trainers-discord" />;
}
