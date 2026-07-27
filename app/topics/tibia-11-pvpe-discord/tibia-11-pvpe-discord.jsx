import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-pvpe-discord');
}

export default function Tibia11PvpeDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-pvpe-discord" />;
}
