import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-pvpe-server-canada');
}

export default function TibiaraPvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-pvpe-server-canada" />;
}
