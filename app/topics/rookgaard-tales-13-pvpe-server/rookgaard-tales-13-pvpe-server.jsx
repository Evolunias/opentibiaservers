import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-13-pvpe-server');
}

export default function RookgaardTales13PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-13-pvpe-server" />;
}
