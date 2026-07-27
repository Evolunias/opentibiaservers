import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-pvpe-discord');
}

export default function Tibia84PvpeDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-pvpe-discord" />;
}
