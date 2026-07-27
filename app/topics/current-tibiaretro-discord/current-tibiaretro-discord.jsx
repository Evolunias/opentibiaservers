import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiaretro-discord');
}

export default function CurrentTibiaretroDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-tibiaretro-discord" />;
}
