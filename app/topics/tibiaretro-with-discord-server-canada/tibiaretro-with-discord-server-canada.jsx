import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-discord-server-canada');
}

export default function TibiaretroWithDiscordServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-discord-server-canada" />;
}
