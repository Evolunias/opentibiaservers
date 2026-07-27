import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-with-discord-server-north-america');
}

export default function RookgaardTalesWithDiscordServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-with-discord-server-north-america" />;
}
