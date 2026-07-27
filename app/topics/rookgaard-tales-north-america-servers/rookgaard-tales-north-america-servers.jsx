import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-north-america-servers');
}

export default function RookgaardTalesNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-north-america-servers" />;
}
