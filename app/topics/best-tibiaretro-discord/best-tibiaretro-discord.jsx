import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiaretro-discord');
}

export default function BestTibiaretroDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-tibiaretro-discord" />;
}
