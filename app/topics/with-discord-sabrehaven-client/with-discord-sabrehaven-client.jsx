import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-sabrehaven-client');
}

export default function WithDiscordSabrehavenClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-sabrehaven-client" />;
}
