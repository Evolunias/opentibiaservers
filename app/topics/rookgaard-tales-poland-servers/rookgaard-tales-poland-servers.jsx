import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-poland-servers');
}

export default function RookgaardTalesPolandServersKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-poland-servers" />;
}
