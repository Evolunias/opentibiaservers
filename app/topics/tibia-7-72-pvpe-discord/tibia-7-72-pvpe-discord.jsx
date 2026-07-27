import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-pvpe-discord');
}

export default function Tibia772PvpeDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-pvpe-discord" />;
}
