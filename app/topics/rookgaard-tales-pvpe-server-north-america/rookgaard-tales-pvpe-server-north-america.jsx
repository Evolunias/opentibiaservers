import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-pvpe-server-north-america');
}

export default function RookgaardTalesPvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-pvpe-server-north-america" />;
}
