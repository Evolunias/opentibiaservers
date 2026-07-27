import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-pvpe-discord');
}

export default function Tibia96PvpeDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-pvpe-discord" />;
}
