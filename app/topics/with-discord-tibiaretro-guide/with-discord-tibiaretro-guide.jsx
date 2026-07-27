import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiaretro-guide');
}

export default function WithDiscordTibiaretroGuideKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiaretro-guide" />;
}
