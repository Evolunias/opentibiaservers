import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-11-retro-server');
}

export default function RookgaardTales11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-11-retro-server" />;
}
