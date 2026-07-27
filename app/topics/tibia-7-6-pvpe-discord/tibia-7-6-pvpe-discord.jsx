import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-pvpe-discord');
}

export default function Tibia76PvpeDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-pvpe-discord" />;
}
