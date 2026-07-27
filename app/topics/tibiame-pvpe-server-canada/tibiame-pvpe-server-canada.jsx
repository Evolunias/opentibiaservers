import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-pvpe-server-canada');
}

export default function TibiamePvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-pvpe-server-canada" />;
}
