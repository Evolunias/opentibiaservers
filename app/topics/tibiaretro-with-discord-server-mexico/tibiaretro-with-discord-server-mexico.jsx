import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-discord-server-mexico');
}

export default function TibiaretroWithDiscordServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-discord-server-mexico" />;
}
