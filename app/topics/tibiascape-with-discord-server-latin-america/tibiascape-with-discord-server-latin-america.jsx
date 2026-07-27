import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-discord-server-latin-america');
}

export default function TibiascapeWithDiscordServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-discord-server-latin-america" />;
}
