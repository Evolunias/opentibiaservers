import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-blazera-private-server');
}

export default function WithDiscordBlazeraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-blazera-private-server" />;
}
