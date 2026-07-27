import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-coxaot-private-server');
}

export default function WithDiscordCoxaotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-coxaot-private-server" />;
}
