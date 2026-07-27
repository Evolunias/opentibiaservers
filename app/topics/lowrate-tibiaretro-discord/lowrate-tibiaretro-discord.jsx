import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiaretro-discord');
}

export default function LowrateTibiaretroDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiaretro-discord" />;
}
