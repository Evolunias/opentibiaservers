import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-mist-of-death-client');
}

export default function WithDiscordMistOfDeathClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-mist-of-death-client" />;
}
