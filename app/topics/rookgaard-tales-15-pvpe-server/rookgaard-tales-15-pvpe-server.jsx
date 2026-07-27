import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-15-pvpe-server');
}

export default function RookgaardTales15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-15-pvpe-server" />;
}
