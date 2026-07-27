import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-mexico-server');
}

export default function RookgaardTalesMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-mexico-server" />;
}
