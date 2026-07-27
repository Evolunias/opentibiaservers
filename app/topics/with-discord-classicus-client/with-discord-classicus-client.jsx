import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-classicus-client');
}

export default function WithDiscordClassicusClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-classicus-client" />;
}
