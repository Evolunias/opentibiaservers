import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-germany-server');
}

export default function RookgaardTalesGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-germany-server" />;
}
