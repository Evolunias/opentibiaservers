import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-chile-servers');
}

export default function RookgaardTalesChileServersKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-chile-servers" />;
}
