import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-rubinot-client');
}

export default function WithDiscordRubinotClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-rubinot-client" />;
}
