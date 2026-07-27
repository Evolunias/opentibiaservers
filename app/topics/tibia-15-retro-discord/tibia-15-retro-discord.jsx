import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-retro-discord');
}

export default function Tibia15RetroDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-retro-discord" />;
}
