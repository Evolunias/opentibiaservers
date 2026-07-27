import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-discord-server-poland');
}

export default function TibiaretroWithDiscordServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-discord-server-poland" />;
}
