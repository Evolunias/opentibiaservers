import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-pvp-server-argentina');
}

export default function RookgaardTalesPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-pvp-server-argentina" />;
}
