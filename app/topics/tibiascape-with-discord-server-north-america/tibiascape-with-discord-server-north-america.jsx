import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-discord-server-north-america');
}

export default function TibiascapeWithDiscordServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-discord-server-north-america" />;
}
