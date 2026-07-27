import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-7-1-pvpe-server');
}

export default function RookgaardTales71PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-7-1-pvpe-server" />;
}
