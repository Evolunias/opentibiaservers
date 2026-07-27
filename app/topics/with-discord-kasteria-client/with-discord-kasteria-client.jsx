import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-kasteria-client');
}

export default function WithDiscordKasteriaClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-kasteria-client" />;
}
