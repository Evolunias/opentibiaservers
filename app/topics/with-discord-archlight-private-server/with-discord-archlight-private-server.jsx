import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-archlight-private-server');
}

export default function WithDiscordArchlightPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-archlight-private-server" />;
}
