import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-oldera-server');
}

export default function WithDiscordOlderaServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-oldera-server" />;
}
