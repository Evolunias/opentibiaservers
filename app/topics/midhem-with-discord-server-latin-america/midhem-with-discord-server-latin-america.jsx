import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-discord-server-latin-america');
}

export default function MidhemWithDiscordServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-discord-server-latin-america" />;
}
