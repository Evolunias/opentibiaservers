import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-trainers-discord');
}

export default function Tibia11WithTrainersDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-trainers-discord" />;
}
