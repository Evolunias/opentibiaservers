import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-retro-discord');
}

export default function Tibia84RetroDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-retro-discord" />;
}
