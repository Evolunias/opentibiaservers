import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-with-trainers-discord');
}

export default function Tibia854WithTrainersDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-with-trainers-discord" />;
}
