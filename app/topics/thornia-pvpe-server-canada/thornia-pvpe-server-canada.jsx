import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-pvpe-server-canada');
}

export default function ThorniaPvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="thornia-pvpe-server-canada" />;
}
