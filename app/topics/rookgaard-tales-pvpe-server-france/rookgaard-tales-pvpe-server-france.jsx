import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-pvpe-server-france');
}

export default function RookgaardTalesPvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-pvpe-server-france" />;
}
