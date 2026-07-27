import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-evolera-private-server');
}

export default function WithDiscordEvoleraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-evolera-private-server" />;
}
