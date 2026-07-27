import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-with-discord-server-latin-america');
}

export default function LumineraWithDiscordServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="luminera-with-discord-server-latin-america" />;
}
