import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-discord-server-mexico');
}

export default function TibiascapeWithDiscordServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-discord-server-mexico" />;
}
