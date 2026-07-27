import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-8-1-pvpe-server');
}

export default function RookgaardTales81PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-8-1-pvpe-server" />;
}
