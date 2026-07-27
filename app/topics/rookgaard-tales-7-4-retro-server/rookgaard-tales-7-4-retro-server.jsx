import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-7-4-retro-server');
}

export default function RookgaardTales74RetroServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-7-4-retro-server" />;
}
