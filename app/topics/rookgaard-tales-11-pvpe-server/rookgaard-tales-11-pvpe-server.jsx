import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-11-pvpe-server');
}

export default function RookgaardTales11PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-11-pvpe-server" />;
}
