import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-pvpe-server-europe');
}

export default function RookgaardTalesPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-pvpe-server-europe" />;
}
