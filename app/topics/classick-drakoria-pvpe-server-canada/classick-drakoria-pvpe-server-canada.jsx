import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-pvpe-server-canada');
}

export default function ClassickDrakoriaPvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-pvpe-server-canada" />;
}
