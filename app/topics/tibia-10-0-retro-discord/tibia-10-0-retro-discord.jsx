import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-retro-discord');
}

export default function Tibia100RetroDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-retro-discord" />;
}
