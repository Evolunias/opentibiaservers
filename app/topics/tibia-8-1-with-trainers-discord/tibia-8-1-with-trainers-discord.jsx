import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-with-trainers-discord');
}

export default function Tibia81WithTrainersDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-with-trainers-discord" />;
}
