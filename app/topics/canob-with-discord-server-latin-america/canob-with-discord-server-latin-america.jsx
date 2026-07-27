import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-with-discord-server-latin-america');
}

export default function CanobWithDiscordServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="canob-with-discord-server-latin-america" />;
}
