import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-retro-discord');
}

export default function Tibia12RetroDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-retro-discord" />;
}
