import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-discord-server-north-america');
}

export default function TibiaretroWithDiscordServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-discord-server-north-america" />;
}
