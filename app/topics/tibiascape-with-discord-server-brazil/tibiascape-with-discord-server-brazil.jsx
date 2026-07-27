import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-discord-server-brazil');
}

export default function TibiascapeWithDiscordServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-discord-server-brazil" />;
}
