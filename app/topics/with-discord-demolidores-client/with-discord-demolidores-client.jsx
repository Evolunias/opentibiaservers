import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-demolidores-client');
}

export default function WithDiscordDemolidoresClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-demolidores-client" />;
}
