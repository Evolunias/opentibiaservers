import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-8-6-retro-server');
}

export default function RookgaardTales86RetroServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-8-6-retro-server" />;
}
