import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiaretro-discord');
}

export default function TopTibiaretroDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-tibiaretro-discord" />;
}
