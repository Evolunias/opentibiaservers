import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-ot-server');
}

export default function RookgaardTalesOtServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-ot-server" />;
}
