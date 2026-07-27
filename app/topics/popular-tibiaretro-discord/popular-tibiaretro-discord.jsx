import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiaretro-discord');
}

export default function PopularTibiaretroDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiaretro-discord" />;
}
