import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-argentina-servers');
}

export default function RookgaardTalesArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-argentina-servers" />;
}
