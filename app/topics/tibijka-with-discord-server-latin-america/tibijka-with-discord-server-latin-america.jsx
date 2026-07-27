import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-discord-server-latin-america');
}

export default function TibijkaWithDiscordServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-discord-server-latin-america" />;
}
