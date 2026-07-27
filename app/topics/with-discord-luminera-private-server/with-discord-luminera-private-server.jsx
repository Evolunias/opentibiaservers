import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-luminera-private-server');
}

export default function WithDiscordLumineraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-luminera-private-server" />;
}
