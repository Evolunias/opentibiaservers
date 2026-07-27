import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-with-discord-server-latin-america');
}

export default function HarmoniaOtWithDiscordServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-with-discord-server-latin-america" />;
}
