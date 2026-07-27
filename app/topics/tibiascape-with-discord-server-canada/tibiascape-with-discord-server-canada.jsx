import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-discord-server-canada');
}

export default function TibiascapeWithDiscordServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-discord-server-canada" />;
}
