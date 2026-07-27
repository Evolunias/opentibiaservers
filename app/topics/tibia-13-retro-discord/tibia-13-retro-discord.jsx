import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-retro-discord');
}

export default function Tibia13RetroDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-retro-discord" />;
}
