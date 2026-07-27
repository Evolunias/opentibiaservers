import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-retro-discord');
}

export default function Tibia854RetroDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-retro-discord" />;
}
