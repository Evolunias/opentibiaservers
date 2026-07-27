import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-pvpe-discord');
}

export default function Tibia12PvpeDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-pvpe-discord" />;
}
