import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-kasteria-server');
}

export default function WithDiscordKasteriaServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-kasteria-server" />;
}
