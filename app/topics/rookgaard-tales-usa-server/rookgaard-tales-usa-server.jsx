import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-usa-server');
}

export default function RookgaardTalesUsaServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-usa-server" />;
}
