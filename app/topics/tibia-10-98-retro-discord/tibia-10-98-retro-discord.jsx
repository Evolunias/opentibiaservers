import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-retro-discord');
}

export default function Tibia1098RetroDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-retro-discord" />;
}
