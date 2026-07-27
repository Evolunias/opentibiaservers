import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-discord-server-latin-america');
}

export default function NepreniaWithDiscordServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-discord-server-latin-america" />;
}
