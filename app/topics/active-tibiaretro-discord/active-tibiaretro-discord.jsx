import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiaretro-discord');
}

export default function ActiveTibiaretroDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-tibiaretro-discord" />;
}
