import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-7-1-retro-server');
}

export default function RookgaardTales71RetroServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-7-1-retro-server" />;
}
