import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-14-pvpe-server');
}

export default function RookgaardTales14PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-14-pvpe-server" />;
}
