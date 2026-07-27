import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-pvpe-server-usa');
}

export default function ClassicusPvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="classicus-pvpe-server-usa" />;
}
