import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-with-discord-server-latin-america');
}

export default function RealeraWithDiscordServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="realera-with-discord-server-latin-america" />;
}
