import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-with-trainers-discord');
}

export default function Tibia1098WithTrainersDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-with-trainers-discord" />;
}
