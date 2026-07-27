import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-with-discord-server-latin-america');
}

export default function ShadowcoresWithDiscordServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-with-discord-server-latin-america" />;
}
