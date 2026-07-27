import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-discord');
}

export default function RookgaardTalesDiscordKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-discord" />;
}
