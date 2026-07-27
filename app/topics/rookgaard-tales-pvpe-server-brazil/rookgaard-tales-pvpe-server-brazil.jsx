import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-pvpe-server-brazil');
}

export default function RookgaardTalesPvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-pvpe-server-brazil" />;
}
