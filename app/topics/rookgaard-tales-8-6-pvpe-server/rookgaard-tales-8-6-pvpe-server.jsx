import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-8-6-pvpe-server');
}

export default function RookgaardTales86PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-8-6-pvpe-server" />;
}
