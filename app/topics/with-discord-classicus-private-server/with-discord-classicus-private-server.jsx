import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-classicus-private-server');
}

export default function WithDiscordClassicusPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-classicus-private-server" />;
}
