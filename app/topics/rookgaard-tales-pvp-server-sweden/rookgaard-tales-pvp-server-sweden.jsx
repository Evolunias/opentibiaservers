import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-pvp-server-sweden');
}

export default function RookgaardTalesPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-pvp-server-sweden" />;
}
