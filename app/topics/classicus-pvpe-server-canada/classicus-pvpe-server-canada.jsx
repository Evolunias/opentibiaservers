import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-pvpe-server-canada');
}

export default function ClassicusPvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="classicus-pvpe-server-canada" />;
}
