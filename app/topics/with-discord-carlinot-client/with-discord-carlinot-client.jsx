import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-carlinot-client');
}

export default function WithDiscordCarlinotClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-carlinot-client" />;
}
