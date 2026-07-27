import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-usa-servers');
}

export default function RookgaardTalesUsaServersKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-usa-servers" />;
}
