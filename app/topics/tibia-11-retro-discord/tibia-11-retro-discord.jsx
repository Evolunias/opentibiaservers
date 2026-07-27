import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-retro-discord');
}

export default function Tibia11RetroDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-retro-discord" />;
}
