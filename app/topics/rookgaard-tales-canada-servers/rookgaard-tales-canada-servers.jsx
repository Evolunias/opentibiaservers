import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-canada-servers');
}

export default function RookgaardTalesCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-canada-servers" />;
}
