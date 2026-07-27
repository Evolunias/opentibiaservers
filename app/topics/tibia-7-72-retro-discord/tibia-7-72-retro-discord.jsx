import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-retro-discord');
}

export default function Tibia772RetroDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-retro-discord" />;
}
