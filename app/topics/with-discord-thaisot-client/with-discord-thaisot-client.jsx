import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-thaisot-client');
}

export default function WithDiscordThaisotClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-thaisot-client" />;
}
