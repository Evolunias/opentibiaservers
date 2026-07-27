import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-discord-server-usa');
}

export default function TibiascapeWithDiscordServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-discord-server-usa" />;
}
