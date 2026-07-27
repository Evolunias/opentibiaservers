import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-north-america-server');
}

export default function RookgaardTalesNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-north-america-server" />;
}
