import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-alastera-private-server');
}

export default function WithDiscordAlasteraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-alastera-private-server" />;
}
