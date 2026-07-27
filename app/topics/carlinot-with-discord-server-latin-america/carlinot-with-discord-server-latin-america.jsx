import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-with-discord-server-latin-america');
}

export default function CarlinotWithDiscordServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-with-discord-server-latin-america" />;
}
