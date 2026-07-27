import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-10-0-retro-server');
}

export default function RookgaardTales100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-10-0-retro-server" />;
}
