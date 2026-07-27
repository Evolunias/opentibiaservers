import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-pvpe-server-canada');
}

export default function RookgaardTalesPvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-pvpe-server-canada" />;
}
