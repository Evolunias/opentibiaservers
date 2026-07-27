import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-brazil-servers');
}

export default function RookgaardTalesBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-brazil-servers" />;
}
