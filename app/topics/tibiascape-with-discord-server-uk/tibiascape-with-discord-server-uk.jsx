import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-discord-server-uk');
}

export default function TibiascapeWithDiscordServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-discord-server-uk" />;
}
