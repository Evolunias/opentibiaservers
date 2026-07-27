import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-chile-server');
}

export default function RookgaardTalesChileServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-chile-server" />;
}
