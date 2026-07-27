import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-carlinot-discord');
}

export default function WithDiscordCarlinotDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-discord-carlinot-discord" />;
}
