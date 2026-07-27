import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-pvpe-server-canada');
}

export default function KasteriaPvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-pvpe-server-canada" />;
}
