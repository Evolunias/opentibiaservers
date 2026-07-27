import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-with-trainers-discord');
}

export default function Tibia14WithTrainersDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-with-trainers-discord" />;
}
