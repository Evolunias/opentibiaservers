import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiantis-private-server');
}

export default function WithDiscordTibiantisPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiantis-private-server" />;
}
