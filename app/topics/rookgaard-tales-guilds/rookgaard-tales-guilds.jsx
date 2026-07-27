import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-guilds');
}

export default function RookgaardTalesGuildsKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-guilds" />;
}
