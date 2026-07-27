import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-mist-of-death-server');
}

export default function WithDiscordMistOfDeathServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-mist-of-death-server" />;
}
