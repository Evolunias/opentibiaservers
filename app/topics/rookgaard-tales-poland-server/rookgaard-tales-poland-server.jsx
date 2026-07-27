import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-poland-server');
}

export default function RookgaardTalesPolandServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-poland-server" />;
}
