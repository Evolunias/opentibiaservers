import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-discord-server-latin-america');
}

export default function MediviaWithDiscordServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-discord-server-latin-america" />;
}
