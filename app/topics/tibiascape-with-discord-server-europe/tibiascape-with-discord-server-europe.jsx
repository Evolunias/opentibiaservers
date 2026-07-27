import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-discord-server-europe');
}

export default function TibiascapeWithDiscordServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-discord-server-europe" />;
}
