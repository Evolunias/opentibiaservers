import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-miracle-private-server');
}

export default function WithDiscordMiraclePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-miracle-private-server" />;
}
