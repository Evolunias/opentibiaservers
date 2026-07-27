import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-alastera-server');
}

export default function WithDiscordAlasteraServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-alastera-server" />;
}
