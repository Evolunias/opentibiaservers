import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-with-discord-server-latin-america');
}

export default function BlazeraWithDiscordServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="blazera-with-discord-server-latin-america" />;
}
