import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-8-1-retro-server');
}

export default function RookgaardTales81RetroServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-8-1-retro-server" />;
}
