import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-pvpe-server-germany');
}

export default function RookgaardTalesPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-pvpe-server-germany" />;
}
