import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-8-0-pvpe-server');
}

export default function RookgaardTales80PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-8-0-pvpe-server" />;
}
