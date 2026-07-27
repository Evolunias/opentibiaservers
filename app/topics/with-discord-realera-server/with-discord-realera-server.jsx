import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-realera-server');
}

export default function WithDiscordRealeraServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-realera-server" />;
}
