import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-sabrehaven-server');
}

export default function WithDiscordSabrehavenServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-sabrehaven-server" />;
}
