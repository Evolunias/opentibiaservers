import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-empirebr-private-server');
}

export default function WithDiscordEmpirebrPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-empirebr-private-server" />;
}
