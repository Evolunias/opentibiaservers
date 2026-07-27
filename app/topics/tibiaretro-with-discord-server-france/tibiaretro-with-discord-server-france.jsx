import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-discord-server-france');
}

export default function TibiaretroWithDiscordServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-discord-server-france" />;
}
