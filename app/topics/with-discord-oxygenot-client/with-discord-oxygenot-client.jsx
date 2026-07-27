import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-oxygenot-client');
}

export default function WithDiscordOxygenotClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-oxygenot-client" />;
}
