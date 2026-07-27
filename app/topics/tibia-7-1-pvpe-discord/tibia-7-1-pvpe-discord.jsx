import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-pvpe-discord');
}

export default function Tibia71PvpeDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-pvpe-discord" />;
}
