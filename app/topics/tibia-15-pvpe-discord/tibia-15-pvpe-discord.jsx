import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-pvpe-discord');
}

export default function Tibia15PvpeDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-pvpe-discord" />;
}
