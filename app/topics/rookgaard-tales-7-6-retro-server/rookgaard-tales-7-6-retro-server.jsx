import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-7-6-retro-server');
}

export default function RookgaardTales76RetroServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-7-6-retro-server" />;
}
