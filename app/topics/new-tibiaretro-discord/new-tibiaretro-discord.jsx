import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiaretro-discord');
}

export default function NewTibiaretroDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-tibiaretro-discord" />;
}
