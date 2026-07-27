import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-eternal-odyssey-client');
}

export default function WithDiscordEternalOdysseyClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-eternal-odyssey-client" />;
}
