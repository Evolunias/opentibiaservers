import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiaretro-discord');
}

export default function FreshStartTibiaretroDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiaretro-discord" />;
}
