import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-9-6-retro-server');
}

export default function RookgaardTales96RetroServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-9-6-retro-server" />;
}
