import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-thaisot-server');
}

export default function WithDiscordThaisotServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-thaisot-server" />;
}
