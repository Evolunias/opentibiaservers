import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiaretro-discord');
}

export default function CustomTibiaretroDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiaretro-discord" />;
}
