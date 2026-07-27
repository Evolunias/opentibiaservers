import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiaretro-discord');
}

export default function HighrateTibiaretroDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiaretro-discord" />;
}
