import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-kasteria-ots');
}

export default function WithDiscordKasteriaOtsKeywordPage() {
  return <StaticKeywordPage slug="with-discord-kasteria-ots" />;
}
