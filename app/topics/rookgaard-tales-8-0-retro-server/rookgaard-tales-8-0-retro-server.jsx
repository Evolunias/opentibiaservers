import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-8-0-retro-server');
}

export default function RookgaardTales80RetroServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-8-0-retro-server" />;
}
