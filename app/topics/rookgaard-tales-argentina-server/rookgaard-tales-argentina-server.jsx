import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-argentina-server');
}

export default function RookgaardTalesArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-argentina-server" />;
}
