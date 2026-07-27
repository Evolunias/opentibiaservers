import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-midhem-private-server');
}

export default function WithDiscordMidhemPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-midhem-private-server" />;
}
