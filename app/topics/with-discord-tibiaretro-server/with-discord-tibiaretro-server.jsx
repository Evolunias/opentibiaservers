import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiaretro-server');
}

export default function WithDiscordTibiaretroServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiaretro-server" />;
}
