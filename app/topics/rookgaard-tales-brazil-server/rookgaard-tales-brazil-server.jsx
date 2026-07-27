import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-brazil-server');
}

export default function RookgaardTalesBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-brazil-server" />;
}
