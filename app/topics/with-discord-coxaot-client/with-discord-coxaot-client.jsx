import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-coxaot-client');
}

export default function WithDiscordCoxaotClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-coxaot-client" />;
}
