import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-pvpe-server-canada');
}

export default function ElderaPvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="eldera-pvpe-server-canada" />;
}
