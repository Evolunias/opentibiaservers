import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-pvpe-server-usa');
}

export default function RookgaardTalesPvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-pvpe-server-usa" />;
}
