import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-12-retro-server');
}

export default function RookgaardTales12RetroServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-12-retro-server" />;
}
