import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-pvpe-discord');
}

export default function Tibia100PvpeDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-pvpe-discord" />;
}
