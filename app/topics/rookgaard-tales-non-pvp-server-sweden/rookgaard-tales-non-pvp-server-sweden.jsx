import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-non-pvp-server-sweden');
}

export default function RookgaardTalesNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-non-pvp-server-sweden" />;
}
