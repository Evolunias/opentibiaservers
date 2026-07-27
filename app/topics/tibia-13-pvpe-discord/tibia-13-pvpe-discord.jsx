import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-pvpe-discord');
}

export default function Tibia13PvpeDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-pvpe-discord" />;
}
