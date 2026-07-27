import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-with-trainers-discord');
}

export default function Tibia76WithTrainersDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-with-trainers-discord" />;
}
