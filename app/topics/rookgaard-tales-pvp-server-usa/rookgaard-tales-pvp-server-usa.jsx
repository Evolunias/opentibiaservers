import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-pvp-server-usa');
}

export default function RookgaardTalesPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-pvp-server-usa" />;
}
