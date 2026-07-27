import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-canada-server');
}

export default function RookgaardTalesCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-canada-server" />;
}
