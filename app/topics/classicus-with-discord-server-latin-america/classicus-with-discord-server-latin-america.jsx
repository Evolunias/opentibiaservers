import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-with-discord-server-latin-america');
}

export default function ClassicusWithDiscordServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-with-discord-server-latin-america" />;
}
