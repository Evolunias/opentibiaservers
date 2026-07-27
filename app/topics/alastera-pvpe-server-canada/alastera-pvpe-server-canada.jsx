import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-pvpe-server-canada');
}

export default function AlasteraPvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="alastera-pvpe-server-canada" />;
}
