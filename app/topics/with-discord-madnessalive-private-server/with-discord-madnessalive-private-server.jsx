import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-madnessalive-private-server');
}

export default function WithDiscordMadnessalivePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-madnessalive-private-server" />;
}
