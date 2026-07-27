import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-with-discord-server-latin-america');
}

export default function ArcaniarlWithDiscordServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-with-discord-server-latin-america" />;
}
