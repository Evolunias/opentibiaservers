import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-pvpe-discord');
}

export default function Tibia14PvpeDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-pvpe-discord" />;
}
