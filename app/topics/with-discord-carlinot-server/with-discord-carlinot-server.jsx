import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-carlinot-server');
}

export default function WithDiscordCarlinotServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-carlinot-server" />;
}
