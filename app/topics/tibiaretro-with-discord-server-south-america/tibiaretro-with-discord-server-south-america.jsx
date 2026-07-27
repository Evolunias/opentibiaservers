import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-discord-server-south-america');
}

export default function TibiaretroWithDiscordServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-discord-server-south-america" />;
}
