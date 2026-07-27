import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-12-pvpe-server');
}

export default function RookgaardTales12PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-12-pvpe-server" />;
}
