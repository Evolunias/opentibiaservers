import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-pvpe-server-south-america');
}

export default function RookgaardTalesPvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-pvpe-server-south-america" />;
}
