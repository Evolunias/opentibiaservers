import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-discord-server-europe');
}

export default function TibiaretroWithDiscordServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-discord-server-europe" />;
}
