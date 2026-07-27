import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-retro-discord');
}

export default function Tibia14RetroDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-retro-discord" />;
}
