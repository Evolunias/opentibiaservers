import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-sabrehaven-ot-server');
}

export default function WithDiscordSabrehavenOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-sabrehaven-ot-server" />;
}
