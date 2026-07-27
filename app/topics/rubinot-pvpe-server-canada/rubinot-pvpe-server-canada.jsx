import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-pvpe-server-canada');
}

export default function RubinotPvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-pvpe-server-canada" />;
}
