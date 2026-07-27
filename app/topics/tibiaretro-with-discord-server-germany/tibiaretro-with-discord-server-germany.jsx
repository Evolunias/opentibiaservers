import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-discord-server-germany');
}

export default function TibiaretroWithDiscordServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-discord-server-germany" />;
}
