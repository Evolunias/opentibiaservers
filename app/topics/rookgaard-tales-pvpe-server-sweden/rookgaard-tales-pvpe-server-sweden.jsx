import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-pvpe-server-sweden');
}

export default function RookgaardTalesPvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-pvpe-server-sweden" />;
}
