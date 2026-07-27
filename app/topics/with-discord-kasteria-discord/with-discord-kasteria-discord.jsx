import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-kasteria-discord');
}

export default function WithDiscordKasteriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-discord-kasteria-discord" />;
}
