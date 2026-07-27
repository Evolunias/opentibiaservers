import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-madnessalive-server');
}

export default function WithDiscordMadnessaliveServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-madnessalive-server" />;
}
