import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-pvpe-server-uk');
}

export default function RookgaardTalesPvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-pvpe-server-uk" />;
}
