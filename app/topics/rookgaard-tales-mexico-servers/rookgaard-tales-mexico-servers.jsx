import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-mexico-servers');
}

export default function RookgaardTalesMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-mexico-servers" />;
}
