import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiaretro-website');
}

export default function WithDiscordTibiaretroWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiaretro-website" />;
}
