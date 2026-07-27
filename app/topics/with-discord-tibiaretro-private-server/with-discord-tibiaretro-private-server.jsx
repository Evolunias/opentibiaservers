import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiaretro-private-server');
}

export default function WithDiscordTibiaretroPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiaretro-private-server" />;
}
