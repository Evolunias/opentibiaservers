import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-miracle-server');
}

export default function WithDiscordMiracleServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-miracle-server" />;
}
