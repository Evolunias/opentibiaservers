import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-pvpe-discord');
}

export default function Tibia74PvpeDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-pvpe-discord" />;
}
