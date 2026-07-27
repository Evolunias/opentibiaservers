import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-coxaot-server');
}

export default function WithDiscordCoxaotServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-coxaot-server" />;
}
