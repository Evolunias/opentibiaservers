import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-with-discord-server-latin-america');
}

export default function AureraGlobalWithDiscordServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-with-discord-server-latin-america" />;
}
