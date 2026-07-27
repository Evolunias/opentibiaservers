import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiaretro-login');
}

export default function WithDiscordTibiaretroLoginKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiaretro-login" />;
}
