import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-with-trainers-discord');
}

export default function Tibia12WithTrainersDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-with-trainers-discord" />;
}
