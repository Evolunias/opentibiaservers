import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-demolidores-server');
}

export default function WithDiscordDemolidoresServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-demolidores-server" />;
}
