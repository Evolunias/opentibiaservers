import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-13-retro-server');
}

export default function RookgaardTales13RetroServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-13-retro-server" />;
}
