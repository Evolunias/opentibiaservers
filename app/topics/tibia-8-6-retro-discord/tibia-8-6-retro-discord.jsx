import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-retro-discord');
}

export default function Tibia86RetroDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-retro-discord" />;
}
