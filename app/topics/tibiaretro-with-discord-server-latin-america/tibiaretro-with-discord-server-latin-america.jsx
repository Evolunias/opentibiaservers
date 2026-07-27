import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-discord-server-latin-america');
}

export default function TibiaretroWithDiscordServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-discord-server-latin-america" />;
}
