import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-15-retro-server');
}

export default function RookgaardTales15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-15-retro-server" />;
}
