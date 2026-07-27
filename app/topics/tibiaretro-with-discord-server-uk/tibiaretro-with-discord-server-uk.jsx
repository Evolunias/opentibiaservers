import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-discord-server-uk');
}

export default function TibiaretroWithDiscordServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-discord-server-uk" />;
}
