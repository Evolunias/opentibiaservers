import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-eldera-private-server');
}

export default function WithDiscordElderaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-eldera-private-server" />;
}
