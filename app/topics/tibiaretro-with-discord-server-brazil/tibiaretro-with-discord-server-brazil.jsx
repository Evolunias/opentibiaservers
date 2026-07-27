import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-discord-server-brazil');
}

export default function TibiaretroWithDiscordServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-discord-server-brazil" />;
}
