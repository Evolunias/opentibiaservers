import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-pvpe-server-latin-america');
}

export default function RookgaardTalesPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-pvpe-server-latin-america" />;
}
