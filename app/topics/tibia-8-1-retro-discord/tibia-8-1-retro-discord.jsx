import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-retro-discord');
}

export default function Tibia81RetroDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-retro-discord" />;
}
